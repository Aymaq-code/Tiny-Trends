// components/ui/Header.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { navLinks } from "@/src/libs/content";
import { LoginLogoutBtn } from "./Buttons";
import { useHeaderAnimation } from "@/src/libs/gsapAnimation";
import { createClient } from "@/src/libs/supabase/client";
import { cantarellBold } from "@/src/app/fonts";
import Link from "next/link";
import Logo from "./Logo";
import Cart from "./Cart";
import Avatar from "./Avatar";
import "../../styles/components/ui/header.css";
import { useLockBodyScroll } from "@/src/hooks/useLockBodyScroll";

type AuthUser = {
  avatarUrl: string | null;
  isLoggedIn: boolean;
} | null;

export default function Header() {
  const [user, setUser] = useState<AuthUser>(null);
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  useHeaderAnimation({ scopeRef: headerRef });

  useLockBodyScroll(isOpen);

  useEffect(() => {
    const supabase = createClient();

    const toUser = (
      u: { user_metadata?: Record<string, unknown> } | null,
    ): AuthUser =>
      u
        ? {
            isLoggedIn: true,
            avatarUrl:
              (u.user_metadata?.avatar_url as string) ??
              (u.user_metadata?.picture as string) ??
              null,
          }
        : { isLoggedIn: false, avatarUrl: null };

    supabase.auth.getUser().then(({ data: { user } }) => setUser(toUser(user)));

    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      setUser(toUser(session?.user ?? null));
    });

    return () => sub.subscription.unsubscribe();
  }, []);

  const isLoggedIn = user?.isLoggedIn ?? false;

  return (
    <nav ref={headerRef} className="header" aria-label="Main navigation">
      <div className="logo-class">
        <Logo />
      </div>

      <ul id="site-navigation" className={`nav-links ${isOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              className={cantarellBold.className}
              href={link.href}
              onClick={() => setIsOpen(false)}>
              {link.label}
            </Link>
          </li>
        ))}
        <li className="nav-auth">
          <LoginLogoutBtn isLoggedIn={isLoggedIn} />
        </li>
      </ul>

      <div className="header-right">
        <Cart />
        {isLoggedIn && <Avatar avatarUrl={user?.avatarUrl ?? null} />}
        <button
          type="button"
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="site-navigation">
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}

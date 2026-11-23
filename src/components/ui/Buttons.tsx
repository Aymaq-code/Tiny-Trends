import Link from "next/link";
import { signOut } from "@/src/app/login/actions";
import "../../styles/components/ui/buttons.css";

type LoginLogoutProps = {
  isLoggedIn: boolean;
};

export function LoginLogoutBtn({ isLoggedIn }: LoginLogoutProps) {
  if (isLoggedIn) {
    return (
      <form action={signOut}>
        <button type="submit" className="login-logout-btn">
          Log Out
        </button>
      </form>
    );
  }

  return (
    <Link href="/login" className="login-logout-btn">
      Log In
    </Link>
  );
}

type ShopNowProps = {
  onClick?: () => void;
};

export function ShopNowBtn({ onClick }: ShopNowProps) {
  return (
    <Link href="/#shop" className="shop-now-btn" onClick={onClick}>
      Shop the collection <span aria-hidden="true">↗</span>
    </Link>
  );
}

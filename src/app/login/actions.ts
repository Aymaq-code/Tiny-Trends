"use server";

import { createClient } from "@/src/libs/supabase/server";
import { redirect } from "next/navigation";

export async function signInWithGoogle(formData: FormData) {
  const supabase = await createClient();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (!siteUrl) {
    console.error("NEXT_PUBLIC_SITE_URL is missing");
    redirect("/login?error=config");
  }

  const rawNext = formData.get("next");
  const next =
    typeof rawNext === "string" &&
    rawNext.startsWith("/") &&
    !rawNext.startsWith("//")
      ? rawNext
      : "/";

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${siteUrl}/auth/callback?next=${encodeURIComponent(next)}`,
    },
  });

  if (error || !data.url) {
    redirect("/login?error=google_auth_failed");
  }

  redirect(data.url);
}

export async function signOut() {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    redirect("/?error=logout_failed");
  }

  redirect("/");
}

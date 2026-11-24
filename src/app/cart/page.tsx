import { Suspense } from "react";
import { redirect } from "next/navigation";

import { connection } from "next/server";
import Contents from "@/src/components/cart/Contents";
import "@/src/styles/cart.css";
import { createClient } from "@/src/libs/supabase/server";

async function CartContent() {
  await connection();

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login?next=/cart");
  }

  return <Contents />;
}

export default function CartPage() {
  return (
    <section className="cartPage">
      <Suspense fallback={<h2>Checking authentication…</h2>}>
        <CartContent />
      </Suspense>
    </section>
  );
}

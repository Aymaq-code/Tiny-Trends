import { createClient } from "@/src/libs/supabase/server";

export default async function AuthTestPage() {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    return <p>Authentication error: {error.message}</p>;
  }

  if (!user) {
    return <p>You are NOT logged in.</p>;
  }

  return (
    <main style={{ padding: "40px" }}>
      <h1>You are successfully logged in!</h1>

      <p>Email: {user.email}</p>

      <p>User ID: {user.id}</p>
    </main>
  );
}

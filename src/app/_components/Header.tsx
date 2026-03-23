'use client'
import { useRouter } from "next/navigation";
import { useSupabaseSession } from "../_hooks/useSupabaseSession";
import Link from "next/link";
import { createClient } from "../utils/supabase/client";

export const Header = () => {
  const router = useRouter();
  const supabase = createClient();
  const {session,isLoading} = useSupabaseSession();
  console.log(session)

  const handleLogout = async() => {
    await supabase.auth.signOut();
    await router.replace("/login");
  }

  return (
    <header className="px-4 py-8 flex justify-between items-center">
      <Link href="/">
        <h1>Premier League</h1>
      </Link>
      {!isLoading && (
        <p>{session ? (
        <button onClick={handleLogout}>ログアウト</button>) 
        : 
        (
        <Link href="/login">ログイン</Link>
        )}
        </p>
      )}
    </header>
  )
}
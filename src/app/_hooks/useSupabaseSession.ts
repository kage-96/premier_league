'use client'

import { Session } from "@supabase/supabase-js"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { createClient } from "../utils/supabase/client"

export const useSupabaseSession = () => {
  const [session,setSession] = useState<Session | null | undefined>(undefined)
  const [token,setToken] = useState<string | null>(null)

  const supabase = createClient()

  const pathname = usePathname();

  useEffect(() => {
    const fetcher = async () => {
      const {
        data:{session},
      } = await supabase.auth.getSession()
      setSession(session)
      setToken(session?.access_token || null)
    }
    fetcher()
  },[pathname])
  
  return {session,isLoading:session === undefined,token}
}

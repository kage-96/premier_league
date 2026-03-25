import { prisma } from "@/app/_lib/prisma";
import { createClient } from "@/app/_lib/supabase/server"

export async function GET(req:Request){
  const {searchParams} = new URL(req.url)
  const matchId = Number(searchParams.get("matchId"))

  const supabase = await createClient();
  const {data:{user}} = await supabase.auth.getUser()

  if(!user) return Response.json({error:"Unauthorized"},{status:401})

    const existing = await prisma.calendarEventLink.findUnique({
      where:{
        userId_matchId:{
          userId:user.id,
          matchId
        }
      }
    })

    return Response.json({
      isRegistered:!!existing
    })
}
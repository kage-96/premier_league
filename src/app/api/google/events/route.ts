import { prisma } from "@/app/_lib/prisma"
import { createClient } from "@/app/_lib/supabase/server"

export async function POST(req: Request) {

  const { matchId, summary, startTime } = await req.json()

  const supabase = await createClient()
  const {data:{user}} = await supabase.auth.getUser()
  console.log(user)

  if(!user) {
    return Response.json({ error: "ログインしてください" }, { status: 401 })
  }
  const userId = user.id as string

  const credential = await prisma.googleCredential.findUnique({
    where: { userId }
  })

  if (!credential) {
    return Response.json({ error: "Googleと接続ができていません。" }, { status: 400 })
  }

  let access_token = credential.access_token

  const now = new Date();

  if(credential.expiryDate && credential.expiryDate < now){
    const refreshRes = await fetch("https://oauth2.googleapis.com/token",{
      method:"POST",
      headers:{
        "Content-Type":"application/x-www-form-urlencoded",
      },
      body:new URLSearchParams({
        client_id:process.env.GOOGLE_CLIENT_ID!,
        client_secret:process.env.GOOGLE_CLIENT_SECRET!,
        refresh_token:credential.refreshToken!,
        grant_type:"refresh_token"
      })
    })
    const refreshData = await refreshRes.json()

    if(!refreshData.access_token){
      return Response.json(
        {error:"トークン更新失敗"},
        {status:400}
      )
    }
    access_token = refreshData.access_token
    await prisma.googleCredential.update({
      where:{userId},
      data:{
        access_token:refreshData.access_token,
        expiryDate:new Date(Date.now() + refreshData.expires_in * 1000)
      }
    })
  }

  

  const res = await fetch("https://www.googleapis.com/calendar/v3/calendars/primary/events",{
      method: "POST",
      headers: {
        Authorization: `Bearer ${credential.accessToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        summary,
        start: {dateTime: startTime},
        end: {dateTime: startTime}
      })
    }
  )

  const event = await res.json()

  await prisma.calendarEventLink.create({
    data: {
      userId,
      matchId,
      googleEventId: event.id
    }
  })

  return Response.json({ ok: true })
}
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
    return Response.json({ error: "GOOGLE_NOT_CONNECTED" }, { status: 400 })
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
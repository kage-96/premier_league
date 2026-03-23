import { prisma } from "@/app/_lib/prisma"

export async function GET(req: Request) {

  const { searchParams } = new URL(req.url)
  const code = searchParams.get("code");
  const userId = searchParams.get("state");

  if(!code || !userId){
    return Response.json({error:"codeかuserIdがない。"},{status:400})
  }

  const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded", },
    body: new URLSearchParams({
      code:code!,
      client_id: process.env.GOOGLE_CLIENT_ID!,
      client_secret: process.env.GOOGLE_CLIENT_SECRET!,
      redirect_uri: process.env.GOOGLE_REDIRECT_URI!,
      grant_type: "authorization_code"
    })
  })

  const token = await tokenRes.json()

  if(!token.access_token){
    return Response.json({error:"token取得失敗"},{status:400})
  }

  console.log("code:", code);
  console.log("token:", token);

  await prisma.googleCredential.upsert({
    where: { userId },
    update: {
      accessToken: token.access_token,
      refreshToken: token.refresh_token,
      expiryDate: new Date(Date.now() + token.expires_in * 1000)
    },
    create: {
      userId,
      accessToken: token.access_token,
      refreshToken: token.refresh_token,
      expiryDate: new Date(Date.now() + token.expires_in * 1000),
      tokenType: "Bearer"
    }
  })

  return Response.redirect("http://localhost:3000")
}
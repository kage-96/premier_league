import { getGoogleAuthUrl } from "@/app/_lib/google";

export async function GET(req:Request){
  const { searchParams } = new URL(req.url)
  const userId = searchParams.get("userId")

  if (!userId) {
    return Response.json({ error: "userId is required" }, { status: 400 });
  }

  const url = getGoogleAuthUrl(userId);
  return Response.redirect(url);
}
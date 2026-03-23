const GOOGLE_OAUTH_URL = "https://accounts.google.com/o/oauth2/v2/auth"

export function getGoogleAuthUrl(userId:string) {
  const params = new URLSearchParams({
    client_id: process.env.GOOGLE_CLIENT_ID!,
    redirect_uri: process.env.GOOGLE_REDIRECT_URI!,
    response_type: "code",
    scope: "https://www.googleapis.com/auth/calendar",
    access_type: "offline",
    prompt: "consent",
    state:userId
  })

  return `${GOOGLE_OAUTH_URL}?${params}`
}
export function toDateKey(utc:string){
  const d = new Date(utc)
  const jp = new Date(d.toLocaleString("en-US",{timeZone:"Asia/Tokyo"}))
  const y = jp.getFullYear()
  const m = String(jp.getMonth() + 1).padStart(2,"0")
  const day = String(jp.getDate()).padStart(2,"0")
  return `${y}-${m}-${day}`
}

export function formatJpTime(utc: string) {
  return new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(utc))
}
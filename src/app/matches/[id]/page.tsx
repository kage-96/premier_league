'use client'
import { useFetcher } from "@/app/_hooks/useFetcher";
import { useParams } from "next/navigation";
import { Matchtype } from "@/app/types/MatchType";
import Image from "next/image";

function formatJpTime(utc: string) {
  return new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(utc))
}
function toDateKey(utc:string){
  const d = new Date(utc)
  const jp = new Date(d.toLocaleString("en-US",{timeZone:"Asia/Tokyo"}))
  const y = jp.getFullYear()
  const m = String(jp.getMonth() + 1).padStart(2,"0")
  const day = String(jp.getDate()).padStart(2,"0")
  return `${y}-${m}-${day}`
}
export default function Matches(){
  const {id} = useParams()

  const {data,isLoading,error} = useFetcher<Matchtype>(`/api/matches/${id}`)

  if(isLoading){return <div>Loading...</div>}
  if(error){return <div>Error: {error.message}</div>}
  if(!data){return <div>No data found</div>}
  console.log(data)
  return (
    <div className="bg-gray-900 rounded-lg p-4">
      <h2 className="text-center text-lg font-bold mb-4 bg-gray-800 p-2 rounded-md">{toDateKey(data.utcDate)}</h2>
      <div className="grid grid-cols-[1fr_60px_1fr]">
        <div className="flex items-center gap-2 text-right justify-end text-sm">
          <p>{data.homeTeam.shortName}</p>
          <Image src={data.homeTeam.crest} alt={data.homeTeam.tla} width={32} height={32} />
        </div>
        <div className="flex items-center gap-2 justify-center">
          {data.status == 'FINISHED' ? (
            <>
              <p>{data.score.fullTime.home}</p>
              <p>-</p>
              <p>{data.score.fullTime.away}</p>
            </>
          ):(
            <div className="flex items-center gap-2 justify-center">
            <p>{formatJpTime(data.utcDate)}</p>
          </div>
          )}
        </div>
        <div className="flex items-center gap-2 text-left justify-start">
          <Image src={data.awayTeam.crest} alt={data.awayTeam.tla} width={32} height={32} />
          <p>{data.awayTeam.shortName}</p>
        </div>
      </div>
      {data.status == 'SCHEDULED' || data.status == 'TIMED' && (
        <button className="bg-blue-500 text-sm text-white px-4 py-2 rounded-md mx-auto block mt-4">カレンダーに登録</button>
      )}
    </div>
  )
}
'use client'
import { useFetcher } from "@/app/_hooks/useFetcher";
import { useParams, useRouter } from "next/navigation";
import { Matchtype } from "@/app/types/MatchType";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createClient } from "@/app/utils/supabase/client";
import { toDateKey } from "@/app/_lib/date";

function formatJpTime(utc: string) {
  return new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(utc))
}

export default function Matches(){
  const {id} = useParams()
  const router = useRouter();

  const {data,isLoading,error} = useFetcher<Matchtype>(`/api/matches/${id}`)
  const [isSubmitting,setIsSubmitting] = useState(false);

  const [user,setUser] = useState<any>(null);

  useEffect(() => {
    const supabase = createClient()
    supabase.auth.getUser().then(({data}) => {
      setUser(data.user)
    })
  },[])

  if(isLoading){return <div>Loading...</div>}
  if(error){return <div>Error: {error.message}</div>}
  if(!data){return <div>No data found</div>}

  const handleAddCalendar = async () => {
    setIsSubmitting(true);
    try{
      const res = await fetch(`/api/google/events`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        matchId: data.id,
        summary: `${data.homeTeam.shortName} vs ${data.awayTeam.shortName}`,
        startTime: data.utcDate
      })
    })
    const json = await res.json();
    if(!res.ok){
      console.log(json.error)
      if(res.status === 401){
        router.push("/login");
        return
      }
      if(json.error === "GOOGLE_NOT_CONNECTED"){
        console.log("Google連携ができていない")
        window.location.href= `/api/google/auth?userId=${user.id}`
        return
      }
      alert("カレンダーに登録できませんでした");
      return
    }
    router.refresh();
  }catch(error){
    console.error(error);
    return
  }finally{
    setIsSubmitting(false);
  }

  }

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

         <button
          onClick={handleAddCalendar}
          disabled={isSubmitting}
          className="bg-blue-500 text-sm text-white px-4 py-2 rounded-md mx-auto block mt-4">
            カレンダーに登録
          </button>
      )}
    </div>
  )
}
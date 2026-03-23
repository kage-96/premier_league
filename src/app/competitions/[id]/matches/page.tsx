'use client'
import { useFetcher } from "@/app/_hooks/useFetcher"
import { TeamMatchType } from "@/app/types/TeamMatchType"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useMemo } from "react"

function toDateKey(utc:string){
  const d = new Date(utc)
  const jp = new Date(d.toLocaleString("en-US",{timeZone:"Asia/Tokyo"}))
  const y = jp.getFullYear()
  const m = String(jp.getMonth() + 1).padStart(2,"0")
  const day = String(jp.getDate()).padStart(2,"0")
  return `${y}-${m}-${day}`
}

function formatJpTime(utc: string) {
  return new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(utc))
}

export default function Matches(){
  const params = useParams<{id:string}>()
  const id = params.id
  const {data,isLoading,error} = useFetcher<TeamMatchType>(id ? `/api/competitions/${id}/matches` : null)

  const grouped = useMemo(()=> {
    const matches = (data?.matches ?? []).filter((m:TeamMatchType['matches'][0]) => m.status == 'FINISHED' || m.status == 'SCHEDULED' || m.status == 'TIMED')
    const grouped = matches.reduce((acc: Record<string, TeamMatchType['matches']>, match: TeamMatchType['matches'][0]) => {
      const key = toDateKey(match.utcDate)
      ;(acc[key] ??= []).push(match)
      return acc
    },{} as Record<string,TeamMatchType['matches']>)
    ;(Object.values(grouped) as TeamMatchType['matches'][]).forEach((list) => {
      list.sort((a:TeamMatchType['matches'][0],b:TeamMatchType['matches'][0]) => 
      new Date(a.utcDate).getTime() - new Date(b.utcDate).getTime())
    })
    return grouped
  },[data])
  
  const dateKeys = Object.keys(grouped).sort()

  if(isLoading){return <div>Loading...</div>}
  if(error){return <div>Error: {error.message}</div>}
  if(!data){return <div>No data found</div>}
  console.log(data)

  return(
  <div>
    <ul className="bg-gray-900 rounded-lg p-4">
      {dateKeys?.map((dateKey) => (
        <li key={dateKey} className="mb-5">
            <h2 className="text-lg text-center font-bold mb-2 bg-gray-800 p-2 rounded-md">{dateKey}</h2>
          <ul className="bg-gray-900 rounded-lg p-4">
            {grouped[dateKey].map((group:TeamMatchType['matches'][0]) => (
              <li key={group.id}>
                <div className="mb-2">
                  <Link href={`/matches/${group.id}`} className="grid items-center grid-cols-[1fr_60px_1fr]">
                  <div className="flex items-center gap-2 text-right justify-end text-sm">
                    <p>{group.homeTeam.shortName}</p>
                    <Image src={group.homeTeam.crest} alt={group.homeTeam.tla} width={32} height={32} />
                  </div>
                  {grouped[dateKey][0].status == 'FINISHED' ? (
                    <div className="flex items-center gap-2 justify-center">
                      <p>{group.score.fullTime.home}</p>
                      <p>-</p>
                      <p>{group.score.fullTime.away}</p>
                    </div>
                  ):(
                    <div className="flex items-center gap-2 justify-center">
                      <p>{formatJpTime(group.utcDate)}</p>
                    </div>
                  )
                  }

                  <div className="flex items-center gap-2 text-sm text-left justify-start">
                    <Image src={group.awayTeam.crest} alt={group.awayTeam.tla} width={32} height={32} />
                    <p>{group.awayTeam.shortName}</p>
                  </div>
                  </Link>
                </div>
              </li>
            ))}
          </ul>

        </li>
      ))}
    </ul>
  </div>
  )
}
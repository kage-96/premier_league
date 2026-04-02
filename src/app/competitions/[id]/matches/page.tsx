'use client'
import { useFetcher } from "@/app/_hooks/useFetcher"
import { formatJpTime, toDateKey } from "@/app/_lib/date"
import { TeamMatchType } from "@/app/types/TeamMatchType"
import Image from "next/image"
import Link from "next/link"
import { useParams, useSearchParams } from "next/navigation"
import { useMemo } from "react"

export default function Matches(){
  const params = useParams<{id:string}>()
  const searchParams = useSearchParams();
  const round = searchParams.get("round")
  
  const id = params.id
  const {data,isLoading,error} = useFetcher<TeamMatchType>(id ? `/api/competitions/${id}/matches` : null)

  const grouped = useMemo(()=> {
    if(!data?.matches?.length) return {}


    const roundNumber = Number(round)
    let matches: TeamMatchType['matches'] = []
    if(round && !isNaN(roundNumber)){
      matches = data?.matches.filter((m:TeamMatchType['matches'][0]) => m.matchday === roundNumber) ?? []
    }else{
      const currentMatchday = data?.matches?.[0]?.season.currentMatchday
      matches = data?.matches.filter((m:TeamMatchType['matches'][0]) => currentMatchday === m.matchday) ?? []
    }


    const grouped = matches.reduce((acc: Record<string, TeamMatchType['matches']>, match: TeamMatchType['matches'][0]) => {
      const key = toDateKey(match.utcDate);
      (acc[key] ??= []).push(match)
      return acc
    },{} as Record<string,TeamMatchType['matches']>);

    (Object.values(grouped) as TeamMatchType['matches'][]).forEach((list) => {
      list.sort((a:TeamMatchType['matches'][0],b:TeamMatchType['matches'][0]) => 
      new Date(a.utcDate).getTime() - new Date(b.utcDate).getTime())
    })
    return grouped
  },[data,round])
  
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
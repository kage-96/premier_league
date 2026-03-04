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

function tolabel(dateKey:string){
  const [,m,d] = dateKey.split('-')
  return `${Number(m)}月${Number(d)}日`
}

export default function Matches(){
  const {id} = useParams()
  const {data,isLoading,error} = useFetcher<TeamMatchType>(id ? `/api/competitions/${id}/matches` : null)

  const groupd = useMemo(()=> {
    const matches = (data?.matches ?? []).filter(m => m.status == 'FINISHED')
    return matches.reduce((acc,match) => {
      const key = toDateKey(match.utcDate)
      ;(acc[key] ??= []).push(match)
      return acc
    },{} as Record<string,TeamMatchType['matches']>)
  },[data])

  return(
  <div>
    <ul>
      {data?.matches.map((match:TeamMatchType['matches'][0]) => (
        <li key={match.id} className="mb-5">
          {match.status == 'FINISHED' ? (
            <div className="mb-2">
              <Link href={`/matches/${match.id}`} className="grid items-center grid-cols-[1fr_60px_1fr]">
              <div className="flex items-center gap-2 text-right justify-end text-sm">
                <p>{match.homeTeam.shortName}</p>
                <Image src={match.homeTeam.crest} alt={match.homeTeam.tla} width={32} height={32} />
              </div>
              <div className="flex items-center gap-2 justify-center">
                <p>{match.score.fullTime.home}</p>
                <p>-</p>
                <p>{match.score.fullTime.away}</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-left justify-start">
                <Image src={match.awayTeam.crest} alt={match.awayTeam.tla} width={32} height={32} />
                <p>{match.awayTeam.shortName}</p>
              </div>
              </Link>
            </div>
          ):(
            <>
            </>
          )}
        </li>
      ))}
    </ul>
  </div>
  )
}
'use client'
import { useFetcher } from "@/app/_hooks/useFetcher"
import { TeamMatchType } from "@/app/types/TeamMatchType"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function Matches(){
  const {id} = useParams()
  const {data,isLoading,error} = useFetcher<TeamMatchType>(id ? `/api/competitions/${id}/matches` : null)
  console.log(data?.matches)
  return(
  <div>
    <ul>
      {data?.matches.map((match:TeamMatchType['matches'][0]) => (
        <li key={match.id} className="mb-2">
          {match.status == 'FINISHED' ? (
            <div>
              <Link href={`/matches/${match.id}`} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <p>{match.homeTeam.shortName}</p>
                <Image src={match.homeTeam.crest} alt={match.homeTeam.tla} width={32} height={32} />
              </div>
              <div className="flex items-center gap-2">
                <p>{match.score.fullTime.home}</p>
                <p>-</p>
                <p>{match.score.fullTime.away}</p>
              </div>
              <div className="flex items-center gap-2">
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
'use client'

import { useFetcher } from "@/app/_hooks/useFetcher"
import { ScorersType } from "@/app/types/ScorersType"
import Image from "next/image";
import { useParams } from "next/navigation"
import { useMemo } from "react";

type ScorerWithRank = ScorersType & {rank:number}

export default function Scorers(){
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const {data,isLoading,error} = useFetcher<ScorersType[]>(id ? `/api/competitions/${id}/scorers` : null);

  const scorersWithRank = useMemo<ScorerWithRank[]>(() => {
    if(!data) return [];
    return data.reduce((acc: ScorerWithRank[], scorer: ScorersType, index: number) => {
      if(index === 0){
        acc.push({...scorer,rank:1})
        return acc
      }

      const prev = acc[index - 1]

      const rank = prev.goals === scorer.goals ? prev.rank : index + 1;

      acc.push({...scorer,rank})
      return acc
    },[] as ScorerWithRank[])
  },[data])

  if(isLoading){return <div>Loading...</div>}
  if(error){return <div>Error: {error.message}</div>}
  if(!data){return <div>No data found</div>}
  
  console.log(data);
  return(
    <div className="bg-gray-900 rounded-lg">
      <ul className="px-4 py-8">
      {scorersWithRank.map((d) => {
        return(
          <li key={d.player.id} className="flex items-center gap-2 py-4 border-b border-gray-700  justify-between">
            <div className="flex items-center gap-2">
              <p>{d.rank}</p>
              <Image src={d.team.crest} alt={d.team.tla} width={32} height={32} />
              <p>{d.player.name}</p>
            </div>
            <div>
              <p>{d.goals}</p>
            </div>
          </li>
        )
      })}
      </ul>
    </div>
  )
}
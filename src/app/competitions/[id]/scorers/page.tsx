'use client'

import { useFetcher } from "@/app/_hooks/useFetcher"
import { ScorersType } from "@/app/types/ScorersType"
import Image from "next/image";
import { useParams } from "next/navigation"

export default function Scorers(){
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const {data,isLoading,error} = useFetcher<ScorersType>(id ? `/api/competitions/${id}/scorers` : null);
  if(isLoading){return <div>Loading...</div>}
  if(error){return <div>Error: {error.message}</div>}
  if(!data){return <div>No data found</div>}
  
  console.log(data);
  console.log(params)
  return(
    <div className="bg-gray-900 rounded-lg">
      <ul className="px-4 py-8">
      {data.map((d:ScorersType,index:number) => {
        return(
          <li key={d.player.id} className="flex items-center gap-2 py-4 border-b border-gray-700  justify-between">
            <div className="flex items-center gap-2">
              <p>{index + 1}</p>
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
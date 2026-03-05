'use client'
import { useFetcher } from "@/app/_hooks/useFetcher";
import { useParams } from "next/navigation";
import { TeamMatchType } from "@/app/types/TeamMatchType";
import Image from "next/image";

export default function TeamMatches(){
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const {data,isLoading,error} = useFetcher<TeamMatchType>(id ? `/api/teams/${id}/matches` : null);
  if(isLoading){return <div>Loading...</div>}
  if(error){return <div>Error: {error.message}</div>}
  if(!data){return <div>No data found</div>}
  console.log(data)


  return(
    <div className="bg-gray-900 rounded-lg">
      <ul className="px-4 py-8 text-center">
        {data.matches.map((match:TeamMatchType['matches'][0]) => (
          <li key={match.id} className="mb-6 w-full">
            <p className="mb-4 bg-gray-800 p-2 rounded-md">{new Date(match.utcDate).toLocaleDateString()}</p>
            <div className="flex items-center justify-center gap-2">
              <p className="min-w-[40px] text-left">{match.homeTeam.tla}</p>
              <Image src={match.homeTeam.crest} alt={match.homeTeam.tla} width={32} height={32} />

              {match.score.winner === null ?
              (
                <>
                  {new Date(match.utcDate).toLocaleTimeString(navigator.language,{
                    hour:'2-digit',
                    minute:'2-digit',
                  })}
                </>
              ):(
                <>
                  <p>{match.score.fullTime.home}</p>
                  <p>vs</p>
                  <p>{match.score.fullTime.away}</p>
                </>
              )}

              <Image src={match.awayTeam.crest} alt={match.awayTeam.tla} width={32} height={32} />
              <p className="min-w-[40px] text-right">{match.awayTeam.tla}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
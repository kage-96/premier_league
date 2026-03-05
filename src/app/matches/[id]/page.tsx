'use client'
import { useFetcher } from "@/app/_hooks/useFetcher";
import { useParams } from "next/navigation";
import { Matchtype } from "@/app/types/MatchType";

export default function Matches(){
  const {id} = useParams()

  const {data,isLoading,error} = useFetcher<Matchtype>(`/api/matches/${id}`)

  if(isLoading){return <div>Loading...</div>}
  if(error){return <div>Error: {error.message}</div>}
  if(!data){return <div>No data found</div>}
  console.log(data)
  return <div>{JSON.stringify(data.score.winner)}</div>
}
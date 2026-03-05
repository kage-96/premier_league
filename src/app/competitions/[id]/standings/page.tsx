'use client'
import { useFetcher } from "@/app/_hooks/useFetcher"
import { StandingRow, StandingsType } from "@/app/types/StandingsType";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function Standings(){
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  console.log(id)
  const {data,isLoading,error} = useFetcher<StandingsType>(id ? `/api/competitions/${id}/standings?season=2025` : null)

  if(isLoading){return <div>Loading...</div>}
  if(error){return <div>Error: {error.message}</div>}
  if(!data){return <div>No data found</div>}
  console.log(data);

  return(
    <div className="bg-gray-900 rounded-lg">
      <div className="px-4 py-8">
        <table className='w-full table-fixed border-collapse text-md'>
          <thead>
            <tr className="border-b border-gray-700">
              <th className="py-3 w-6"></th>
              <th className="py-3 w-6"></th>
              <th className="py-3"></th>
              <th className='text-sm text-right py-3 w-8'>P</th>
              <th className='text-sm text-right py-3 w-8'>W</th>
              <th className='text-sm text-right py-3 w-8'>D</th>
              <th className='text-sm text-right py-3 w-8'>L</th>
            </tr>
          </thead>
          <tbody>
            {data.standings[0].table.map((d:StandingRow) => (
              <tr key={d.team.id}>
                <td className="w-6 py-3">{d.position < 10 ? `0${d.position}` : d.position}</td>
                <td className="py-3 w-6">
                  <Image src={d.team.crest} alt={d.team.shortName} width={40} height={40} />
                  </td>
                <td className="text-left pl-2 py-3">{d.team.shortName}</td>
                <td className='text-sm text-right py-3 w-8'>{d.points}</td>
                <td className='text-sm text-right py-3 w-8'>{d.won}</td>
                <td className='text-sm text-right py-3 w-8'>{d.draw}</td>
                <td className='text-sm text-right py-3 w-8'>{d.lost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
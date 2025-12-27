import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest,{params}:{params:{id:string,matchday?:string}}){
  const token = process.env.FOOTBALL_TOKEN;
  const baseUrl = process.env.FOOTBALL_API_URL;

  if(!token){
    console.error("トークンがセットされていません。")
    return NextResponse.json(
      {message:"Server configuration error"},
      {status:500},
    )
  }

  if(!baseUrl){
    console.error('API URLがセットされていません。')
    return NextResponse.json(
      {message:"Server configuration error"},
      {status:500},
    )
  }

  const {id} = params;
  const matchday = request.nextUrl.searchParams.get('matchday') ?? ''
  try{
    console.log(`matchday: ${matchday}`)
    const res = await fetch(`${baseUrl}/competitions/${id}/matches?matchday=${matchday}`,{
      headers:{
        'X-Auth-Token': token
      },
      next:{
        revalidate:60
      }
    })
    if(!res.ok){
      console.error("Football API error:",res.status, res.statusText);
      return NextResponse.json(
        {message:"Failed to fetch matches"},
        {status:res.status}
      )
    }
    const data = await res.json()
    return NextResponse.json(data,{status:200})
  }catch(error){
    if(error instanceof Error){
      console.error("Error fetching matches:",error.message, error.stack);
    }else{
      console.error("Unknown error fetching matches:",error)
    }
    return NextResponse.json(
      {message:"Internal server error"},
      {status:500}
    )
  }
}
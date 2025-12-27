import { ScorersType } from "@/app/types/ScorersType";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest,{params}:{params:{id:string,limit?:number}}){
  const token = process.env.FOOTBALL_TOKEN;
  const baseUrl = process.env.FOOTBALL_API_URL

  if(!token){
    console.error("トークンがセットされていません。")
    return NextResponse.json(
      {message:"Server configuration error"},
      {status:500}
    )
  }

  if(!baseUrl){
    console.error("API URLがセットされていません。")
    return NextResponse.json(
      {message:"Server configuration error"},
      {status:500}
    )
  }

  const {id} = params;
  const limit = request.nextUrl.searchParams.get('limit') ?? 10;
  
  try{
    const res = await fetch(`${baseUrl}/competitions/${id}/scorers?limit=${limit}`,{
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
        {message:"Failed to fetch scorers"},
        {status:res.status}
      )
    }
    const data = await res.json()
    const scorers:ScorersType[] = data.scorers

    if(!scorers){
      console.error("Unexpected scorers format:",data);
      return NextResponse.json(
        {message:"Scorers data is missing"},
        {status:502}
      )
    }
    return NextResponse.json(scorers,{status:200})
  }
  catch(error){
    if(error instanceof Error){
      console.error("Error fetching scorers:",error.message, error.stack);
    }else{
      console.error("Unknown error fetching scorers:",error)
    }
    return NextResponse.json(
      {message:"Internal server error"},
      {status:500}
    )
  }
}
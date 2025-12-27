import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest,{params}:{params:{id:string,season?:string}}){
  const token = process.env.FOOTBALL_TOKEN;
  const baseUrl = process.env.FOOTBALL_API_URL

  if(!token){
    console.error("トークンがセットされていません。");
      return NextResponse.json(
        {message:"Server configuration error"},
        {status:500}
    )
  }

  if(!baseUrl){
    console.error("API URLがセットされていません。");
    return NextResponse.json(
      {message:"Server configuration error"},
      {status:500}
    )
  }

  const {id} = params;
  const season = request.nextUrl.searchParams.get('season') ?? new Date().getFullYear().toString();

  try{

    const res = await fetch(`${baseUrl}/competitions/${id}/standings?season=${season}`,{
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
        {message:"Failed to fetch standings"},
        {status:res.status}
      )
    }
    
    const data = await res.json()
    // const table = data.standings?.[0]?.table

    // if(!table){
    //   console.error("Unexpected standings format:",data);
    //   return NextResponse.json(
    //     {message:"Standings data is missing"},
    //     {status:502}
    //   )
    // }
    
    return NextResponse.json(data,{status:200})


  }catch(error){

    if(error instanceof Error){
      console.error("Error fetching standings:",error.message, error.stack);
    }else{
      console.error("Unknown error fetching standings:",error)
    } 

    return NextResponse.json(
      {message:"Internal server error"},
      {status:500}
    )

  }

}
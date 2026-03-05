import { loginSchema } from "@/app/_lib/validation/auth";
import { NextResponse } from "next/server";

export async function POST(req:Request){
  let json:unknown;

  try{
    json = await req.json();
  }catch{
    return NextResponse.json(
      {errorCode:"INVALID_JSON",message:"リクエスト形式が不正です。"},
      {status:400}
    )
  }

  const parsed = loginSchema.safeParse(json); //jsonをスキーマにパースしてくれる。正常なら{success:true,data:{email:'',password:''}のようなオブジェクトを返す。}safeParseはエラーがあっても落ちないようにする。
  if(!parsed.success){
    const fieldErrors = parsed.error.issues.reduce((acc,issue) => {
      const key = issue.path[0]
      if(!key) return acc;

      if(typeof key !== 'string') return acc;

      acc[key] = issue.message;
      return acc;
    },{} as Record<string,string>)
     //エラーがあった場合はfieldErrorsにエラーの内容が入ってくる。flattenはエラーの内容を平坦化してくれる。
    return NextResponse.json(
      {fieldErrors},
      {status:422}
    )
  }

  const {email,password} = parsed.data;

  const ok = await fakeAuth(email,password)

  if(!ok){
    return NextResponse.json(
      {errorCode:"INVALID_CREDENTIALS",message:"メールアドレスまたはパスワードが間違っています。"},
      {status:401}
    )
  }
  return NextResponse.json({ ok: true })
}

async function fakeAuth(email:string,password:string){
  return email === 'test@test.com' && password === 'password';
}
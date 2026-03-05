import { prisma } from "@/app/_lib/prisma";
import bcrypt from "bcrypt"
import { registerSchema } from "@/app/_lib/validation/auth";
import { NextResponse } from "next/server";

export async function POST(req:Request){
  const json = await req.json().catch(() => null);
  if(!json){
    return NextResponse.json(
      {errorCode:"INVALID_JSON",message:"リクエスト形式が不正です。"},
      {status:400}
    )
  }

  const parsed = registerSchema.safeParse(json);
  if(!parsed.success){
    const fieldErrors = parsed.error.issues.reduce((acc,issue) => {
      const key = issue.path[0]
      if(!key) return acc;

      if(typeof key !== 'string') return acc;

      acc[key] = issue.message;
      return acc;
    },{} as Record<string,string>)

    return NextResponse.json(
      {fieldErrors},
      {status:422}
    )
  }

  const {email,password} = parsed.data;

  const existing = await prisma.user.findUniuque({where:{email}})
  if(existing){
    return NextResponse.json(
      {errorCode:"EMAIL_ALREADY_USED",message:"このメールアドレスは既に使われています。"},
      {status:409}
    )
  }

  const passwordHash = await bcrypt.hash(password,12)

  await prisma.user.create({
    data:{
      email,
      passwordHash,
    },
  })

  return NextResponse.json({ ok: true },{status:200})

}
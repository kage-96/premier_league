import { prisma } from "@/app/_lib/prisma";
import { createClient } from "@/app/_lib/supabase/server";

export async function POST(){
  const supabase = await createClient();
  const { data: {user}} = await supabase.auth.getUser();

  if(!user){
    return(
      Response.json({error:"no user"},{status:401})
    )
  }

  await prisma.user.upsert({
    where:{id:user.id},
    update:{},
    create:{
      id:user.id,
    }
  })

  return Response.json({ok:true})
}
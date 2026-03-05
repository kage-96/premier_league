'use client';

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { LoginInput, loginSchema } from "../_lib/validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Login(){

  const {register,handleSubmit, setError, formState:{errors,isSubmitting}} = useForm<LoginInput>({
    resolver:zodResolver(loginSchema),
    mode:'onSubmit' //フォームの送信時にバリデーションを行う。
  })
  const router = useRouter()

  const onSubmit = async (data:LoginInput) => {

    const res =await fetch('/api/login',{
      method:'POST',
      headers: { "Content-Type": "application/json" },
      body:JSON.stringify(data)
    })

    if(res.ok){
      router.replace('/');
      return;
    }

    const payload = await res.json().catch(() => null) //jsonじゃなくてもエラーで落ちないようにする。
    setError('root',{message:payload?.message ?? 'ログインに失敗しました。もう一度お試しください。'})

  }

  return(
    <>
    <form className="flex flex-col gap-2 max-w-md mx-auto" onSubmit={handleSubmit(onSubmit)}>
    {errors.root && <p className="text-red-500 text-sm">{errors.root.message}</p>}
      <div>
        <label htmlFor="email">メールアドレス</label>
        <input id="email" type="email" placeholder="test@test.com" {...register('email')} />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="password">パスワード</label>
        <input id="password" type="password" placeholder="●●●●●●●●" {...register('password')} />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>
      <div>
        <button type="submit" disabled={isSubmitting}>ログイン</button>
      </div>
    </form>
    </>
  )
}
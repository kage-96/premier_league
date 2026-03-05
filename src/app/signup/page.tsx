'use client'
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form";
import { RegisterInput, registerSchema } from "../_lib/validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Signup(){

  const router = useRouter();

  const {register,handleSubmit,setError,formState:{errors,isSubmitting}} = useForm<RegisterInput>({
    resolver:zodResolver(registerSchema),
    mode:'onSubmit'
  })

  const onSubmit = async (data:RegisterInput) => {
    const res = await fetch('/api/signup',{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(data)
    })

    if(res.status === 200){
      router.replace("/login");
      return;
    }

    const payload = await res.json().catch(() => null);
    if(res.status === 422 && payload?.fieldErrors){
      const fe = payload.fieldErrors as Record<string,string>

      if(fe.email) setError("email",{message:fe.email})
        if(fe.password) setError("password",{message:fe.password})
        if(fe.confirmPassword) setError("confirmPassword",{message:fe.confirmPassword})
        return;
    }

    if(res.status === 409){
      setError("email",{message:payload?.message ?? "このメールアドレスは既に使われています。"})
      return;
    }

    setError("root",{message:payload?.message ?? "登録に失敗しました。もう一度お試しください。"})
  }

  return(
    <>
      <form className="flex flex-col gap-2 max-w-md mx-auto" onSubmit={handleSubmit(onSubmit)}>
        {errors.root && <p className="text-red-500 text-sm">{errors.root.message}</p>}
        <div>
          <label htmlFor="email">メールアドレス</label>
          <input id="email" type="email" placeholder="test@test.com" {...register('email')} />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="password">パスワード</label>
          <input id="password" type="password" placeholder="●●●●●●●●" {...register('password')} />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>
        <div>
          <label htmlFor="confirmPassword">確認用パスワード</label>
          <input id="confirmPassword" type="password" placeholder="●●●●●●●●" {...register('confirmPassword')} />
          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
        </div>
        <div>
          <button type="submit" disabled={isSubmitting}>{isSubmitting ? "登録中..." : "新規登録"}</button>
        </div>
      </form>
    </>
  )
}
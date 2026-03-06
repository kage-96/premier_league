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
<form className="mx-auto w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8" onSubmit={handleSubmit(onSubmit)} >
  <div className="mb-6">
    <h1 className="text-2xl font-bold text-gray-900">新規登録</h1>
  </div>

  {errors.root && (
    <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3">
      <p className="text-sm text-red-600">{errors.root.message}</p>
    </div>
  )}

  <div className="space-y-5">
    <div>
      <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
        メールアドレス
      </label>
      <input id="email" type="email" placeholder="test@test.com" {...register("email")} className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-gray-900 focus:ring-2 focus:ring-gray-200 text-black"/>
      {errors.email && (
        <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>
      )}
    </div>

    <div>
      <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-700">
        パスワード
      </label>
      <input id="password" type="password" placeholder="●●●●●●●●" {...register("password")} className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-gray-900 focus:ring-2 focus:ring-gray-200 text-black"/>
      {errors.password && (
        <p className="mt-2 text-sm text-red-500">{errors.password.message}</p>
      )}
    </div>

    <div>
      <label htmlFor="confirmPassword" className="mb-2 block text-sm font-medium text-gray-700">
        確認用パスワード
      </label>
      <input
        id="confirmPassword"
        type="password"
        placeholder="●●●●●●●●"
        {...register("confirmPassword")}
        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-gray-900 focus:ring-2 focus:ring-gray-200 text-black"
      />
      {errors.confirmPassword && (
        <p className="mt-2 text-sm text-red-500">
          {errors.confirmPassword.message}
        </p>
      )}
    </div>

    <button type="submit" disabled={isSubmitting} className="mt-2 w-full rounded-lg bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-400">
      {isSubmitting ? "登録中..." : "新規登録"}
    </button>
  </div>
</form>
    </>
  )
}
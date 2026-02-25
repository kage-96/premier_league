import { z } from "zod";

export const loginSchema = z.object({ //スキーマの作成。（今回はログインスキーマ）
  email: z.string().min(1,"メールアドレスは必須です。").email("メールアドレスの形式が正しくありません。"),
  password:z.string().min(1,"パスワードは必須です。"),
})

export type LoginInput = z.infer<typeof loginSchema> //自動で型の生成を行ってくれる。

export const registerSchema = z.object({
  email: z.string().min(1,"メールアドレスは必須です。").email("メールアドレスの形式が正しくありません。"),
  password: z.string().min(1,"パスワードは必須です。"),
  confirmPassword: z.string().min(1,"確認用パスワードは必須です。")
}).refine((v) => v.password === v.confirmPassword,{
  message:"パスワードと確認用パスワードが一致していません。",
  path:["confirmPassword"],
})

export type RegisterInput = z.infer<typeof registerSchema>
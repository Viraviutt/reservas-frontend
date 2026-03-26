'use client'

import { useState } from "react"
import { handleLogin, FormState } from "./actions"
import { useRouter } from "next/navigation"
import { Button } from "@/app/components/atoms/Button"
import { Input } from "@/app/components/atoms/Input"

export default function LoginPage() {
  const [state, setState] = useState<FormState | null>(null)
  const [isPending, setIsPending] = useState(false)
  const router = useRouter()

  async function clientAction(formData: FormData ){
    setIsPending(true)
    const result = await handleLogin(formData)
    setState(result)  
    setIsPending(false)

    result.success = true

    if(result.success) {
      router.push("/dashboard")
    } 
  }
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-white font-sans">
      <div className="flex w-90 h-120 rounded-2xl shadow-2xl shadow-gray-500/70 flex-col items-center justify-center py-32 px-16 bg-zinc-200/50 sm:items-start">
        <main className="flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold text-black">Login</h1>
            <form action={clientAction} className="flex flex-col gap-4 mt-8 text-black">
              <Input label="Email:" type="email" name="email" placeholder="Email" required />
              <Input label="Password:" type="password" name="password" placeholder="Password" required />
              {state && !state.success && (<p style={{color: 'red'}}>{state.message}</p>)}
              <Button type="submit">{isPending ? 'Cargando...' : 'Iniciar Sesión'}</Button>
            </form>
        </main>
      </div>
    </div>
  );
}

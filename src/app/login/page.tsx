import Logo from "@/components/ui/Logo"
import FormLogin from "@/components/forms/FormLogin"
import ButtonGoogle from "@/components/ui/ButtonGoogle"
import { getServerSession, Session } from "next-auth"
import { authOptions } from "@/lib/authOptions"
import { redirect } from "next/navigation"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Login",
  description: "Login",
}

export default async function Login() {

  const session = await getServerSession(authOptions) as Session | null
  if(session) {
    redirect('/')
  }

  return (
    <section className="h-dvh">

        <div className="flex flex-col md:flex-row h-[inherit]">

          <div className="flex-1 flex flex-col items-center justify-center p-10 gap-10 bg-gray-100">

            <div className="border p-5 flex flex-col gap-5 bg-white max-w-md w-full rounded-xl">
              <div className="flex justify-center">
                <Logo />
              </div>
              <div className="flex justify-center font-bold">
                <h1 className="text-[18px]">Login</h1>
              </div>
              <div className="flex flex-col gap-3">
                <ButtonGoogle />
                <div className="text-center text-divider">
                  <span>or</span>
                </div>
                <FormLogin />
              </div>
            </div>

            {/** Links */}
            <div className="text-center flex flex-col gap-3 text-body text-opacity-70">

              <p>
                <Link href="/signup" className="underline">Register a FREE account</Link>
              </p>

              <p>
                <Link href="/password-reset" className="underline">Forgot password</Link>
              </p>

              <p>
                <Link href="/" className="underline">Go back to home page</Link>
              </p>
            </div>
            
          </div>

          <div className="flex-1 bg-primary hidden md:flex text-white items-center justify-center h-auto">
            <div className="p-10 text-[1.2em] space-y-5">
              <div className="max-w-[320px] text-[22px]">
                <p>Built exclusively for our kababayans who want to send cargo to the Philippines in a fast and safe way through our company.</p>
              </div>
            </div>
          </div>

        </div>

    </section>
  )
}

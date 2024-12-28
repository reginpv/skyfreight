import { Metadata } from "next"
import { getServerSession } from "next-auth"
import Link from "next/link"
import { redirect } from "next/navigation"
import TemplateBlank from "@/components/templates/Blank"
import Card from "@/components/ui/Card"
import FormPasswordReset from "@/components/forms/FormPasswordReset"
import Logo from "@/components/ui/Logo"
import { PUBLIC_EMAIL } from "@/config/constants"

export const metadata: Metadata = {
  title: "Password reset",
  description: "Reset your password"
}

export default async function PasswordReset() {

  // Public only
  const session = await getServerSession()
  if(session) {
    redirect('/')
  }
  
  return (
    <TemplateBlank>
      <div className="container min-h-screen flex flex-col gap-5 items-center justify-center px-5">
        <div className="">
          <Logo />
        </div>
        <h1 className="font-outfit text-[1.4rem] uppercase font-[800]">Password reset</h1>
        <Card className="max-w-md flex-none w-full">
          <div>
            <p className="mb-0">Enter your email address below and we'll send you password reset instructions.</p>
          </div>
          <FormPasswordReset />
          <div>
            <hr className="mb-3" />
            <p className="mb-0 text-sm">If you don't see your reset email be sure to check your spam filter for an email from <em>{PUBLIC_EMAIL}</em></p>
          </div>
        </Card>

        {/**  */}
        <div className="text-center flex flex-col gap-2">
          <p>
            <Link href="/login" className="underline">Back to login</Link>
          </p>
          <p>
            <Link href="/" className="underline">Back to home page</Link>
          </p>
        </div>
        
      </div>
    </TemplateBlank>
    
  )
}
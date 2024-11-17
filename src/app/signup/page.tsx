import TemplateBlank from "@/components/templates/Blank"
import Logo from "@/components/ui/Logo"
import ButtonGoogle from "@/components/ButtonGoogle"
import Link from "next/link"
import FormSignup from "@/components/forms/FormSignup"

export default function Signup() {
  return (
    <TemplateBlank>
      <section className="h-dvh">

          <div className="flex flex-col md:flex-row h-[inherit]">

            <div className="flex-1 flex flex-col items-center justify-center p-10 gap-10 bg-gray-100">

              <div className="border p-5 flex flex-col gap-5 bg-white max-w-md w-full">
                <div className="flex justify-center">
                  <Logo />
                </div>
                <div className="flex justify-center uppercase font-bold">
                  <h2>Register a free account</h2>
                </div>
                <div className="flex flex-col gap-3">
                  <ButtonGoogle />
                  <div className="text-center text-divider">
                    <span>or</span>
                  </div>
                  <FormSignup />
                </div>
              </div>

              {/** Links */}
              <div className="text-center flex flex-col gap-3 text-body text-opacity-70">

                <p>
                  Already have an account? <Link href="/login" className="underline">Click here to login</Link>
                </p>

                <p>
                  <Link href="/" className="underline">Go back to home page</Link>
                </p>

              </div>
              
            </div>

            <div className="flex-1 bg-primary hidden md:flex text-white items-center justify-center h-auto">
              <div className="p-10 text-[1.2em] space-y-5">
                [CONTENT]
              </div>
            </div>

          </div>

      </section>
    </TemplateBlank>
  )
}

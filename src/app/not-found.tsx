import { Metadata } from "next"
import Link from "next/link"
import TemplateBlank from "@/components/templates/Blank"
import { PUBLIC_EMAIL, PUBLIC_SITENAME, PUBLIC_SM_FACEBOOK, PUBLIC_SM_LINKEDIN, PUBLIC_URL } from "@/config/constants"

export const metadata: Metadata = {
  title: "Not found",
  description: "Resource not found!"
}

export default function NotFound() {
  return (
    <TemplateBlank className="">
      <section className="flex flex-col items-center justify-center py-10 min-h-[100dvh]">
        <h1 className="mb-10">Page not found</h1>
        <p>Could not find requested resource</p>
        <Link href="/" className="font-bold">Return Home</Link>
        <hr />

        <div className="py-10 text-center">
          {/** Social */}
          <div className="mb-10 flex justify-center gap-5">
          
            <a target="_blank" rel="noreferrer noopener" href={PUBLIC_SM_FACEBOOK}><img src="/images/icon-facebook.png" alt="Qr code ph Facebook" width="32" height="32" className="inline-block" /></a>

            <a target="_blank" rel="noreferrer noopener" href={PUBLIC_SM_LINKEDIN}><img src="/images/icon-linkedin.png" alt="Qr code ph Linkedin" width="32" height="32" className="inline-block" /></a>
        
          </div>

          <p>{ PUBLIC_SITENAME } - <Link href="/">{ PUBLIC_URL }</Link></p>
          <p>For inquiries and support questions<br />please email <a href={`mailto:${PUBLIC_EMAIL}`}>{PUBLIC_EMAIL}</a></p>
        </div>

        <div>
          Developed by <a href="https://regin.dev" target="_blank" className="text-black font-semibold">Gin</a>
        </div>
        
      </section>
    </TemplateBlank>
  )
}
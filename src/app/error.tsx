"use client" // Error boundaries must be Client Components

import Link from "next/link"
import TemplateBlank from "@/components/templates/Blank"
import Logo from "@/components/ui/Logo"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
 
  return (
    <TemplateBlank>
      <div className="min-h-[100dvh]">
        <div className="container container--custom flex flex-col items-center justify-center gap-7 min-h-[100dvh] text-center">
          <div>
            <Logo />
          </div>
          <h1>Oops, something went wrong!</h1>
          <div>
            <Link href="/">Go back to Home</Link>
          </div>
        </div>
      </div>
    </TemplateBlank>
  )
}
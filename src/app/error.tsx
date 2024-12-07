"use client" // Error boundaries must be Client Components

import Link from "next/link"
import TemplateBlank from "@/components/templates/Blank"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
 
  return (
    <TemplateBlank>
      <div className="min-h-screen flex flex-col items-center justify-center gap-7">
        <h1>Oops, something went wrong!</h1>
        <div>
          <Link href="/">Go back to Home</Link>
        </div>
      </div>
    </TemplateBlank>
  )
}
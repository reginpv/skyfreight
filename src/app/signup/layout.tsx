import { Metadata } from "next"
import { ReactNode } from "react"
import TemplateBlank from "@/components/templates/Blank"

export const metadata: Metadata = {
  title: "Signup",
  description: "Signup"
}

export default function BlankLayout({
  children
}:{
  children: ReactNode
}) {

  return (
    <TemplateBlank>
      {children}
    </TemplateBlank>
  )
}
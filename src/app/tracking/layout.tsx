import { Metadata } from "next"
import { ReactNode } from "react"
import TemplateDefault from "@/components/templates/Default"

export const metadata: Metadata = {
  title: "Tracking",
  description: "Tracking"
}

export default function BlankLayout({
  children
}:{
  children: ReactNode
}) {

  return (
    <TemplateDefault>
      {children}
    </TemplateDefault>
  )
}
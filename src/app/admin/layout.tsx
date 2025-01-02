import { Metadata } from "next"
import { ReactNode } from "react"
import TemplateDashboard from "@/components/templates/Dashboard"

export const metadata: Metadata = {
  title: "Admin",
  description: "Admin"
}

export default function BlankLayout({
  children
}:{
  children: ReactNode
}) {

  return (
    <TemplateDashboard>
      {children}
    </TemplateDashboard>
  )
}
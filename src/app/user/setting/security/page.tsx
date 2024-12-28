import FormSecurity from "@/components/forms/FormSecurity"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Security",
  description: `Security`,
}

export default async function DashboardSettingsSecurity() {
  
  return (
    <section className="py-page">
      <div className="mb-5 md:mb-8">
        <h1>Password and security</h1>
      </div>
      <FormSecurity /> 
    </section>
  )
}
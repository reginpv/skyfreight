import FormSecurity from "@/components/forms/FormSecurity"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Security",
  description: `Security`,
}

export default async function DashboardSettingsSecurity() {
  
  return (
    <section className="~py-[30px]/[60px]">
      <div className="container container--custom">
        <div className="mb-5 md:mb-8">
          <h1>Password and security</h1>
        </div>
        <FormSecurity /> 
      </div>
    </section>
  )
}
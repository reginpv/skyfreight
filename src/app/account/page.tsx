import TemplateDefault from "@/components/templates/Default"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Account",
  description: "Account",
}

export default function Account() {
  return (
    <TemplateDefault>
      <section>
        <div className="container container--custom">
          <div>
            Coming soon...
          </div>
        </div>
      </section>
    </TemplateDefault>
  )
}

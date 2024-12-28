import TemplateDefault from "@/components/templates/Default"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admin",
  description: "Admin",
}

export default function Admin() {
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

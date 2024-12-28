import TemplateDefault from "@/components/templates/Default"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cart",
  description: "Cart",
}

export default function Cart() {
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

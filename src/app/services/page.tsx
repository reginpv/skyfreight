import TemplateDefault from "@/components/templates/Default"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services",
  description: "Services",
}

export default function Services() {
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
  );
}

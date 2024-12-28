import TemplateDefault from "@/components/templates/Default"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tracking",
  description: `Tracking`,
}


export default function Home() {
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

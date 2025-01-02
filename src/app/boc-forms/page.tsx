import BannerInnerExpanded from "@/components/BannerInnerExpanded"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "BOC Forms",
  description: "BOC forms",
}

export default function BOCForms() {
  return (
    <div className="flex flex-col gap-5">
      <BannerInnerExpanded 
        title="BOC <strong>forms</strong>"
        content="Save time and download the Bureau of Customs (BOC) forms ahead!"
      />
      <section className="page">
        <div className="container container--custom">
          <div>
            {
              [
                {
                  "content": "Visit www.cistoms.gov.ph"
                },
                {
                  "content": "Look for the category: For considated shipment of balikbayan boxes."
                },
                {
                  "content": "click \"CMO 18-2018 Information Sheet\" found under the category on step 2."
                },
                {
                  "content": "Download the file and fill out the ncessary details and hand it over to our team upon pickup of your boxes."
                }
              ].map((c, i)=>(
                <div key={i} className="flex">
                  <div className="bg-secondary p-5 aspect-[1/1]">{i+1}</div>
                  <div>{c.content}</div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </div>
  )
}

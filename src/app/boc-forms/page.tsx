import BannerInnerExpanded from "@/components/BannerInnerExpanded"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "BOC Forms",
  description: "BOC forms",
}

export default function BOCForms() {
  return (
    <div className="flex flex-col ~gap-[10px]/[20px]">
      <BannerInnerExpanded 
        title="BOC <strong>forms</strong>"
        content="Save time and download the Bureau of Customs (BOC) forms ahead!"
      />
      <section className="page">
        <div className="container container--custom">

          <div className="flex flex-col ~gap-[20px]/[30px]">

            <h2 className="text-primary font-bold uppercase">You may also follow these simple steps:</h2>
            
            <div className="flex flex-col ~gap-[10px]/[20px]">
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
                  <div key={i} className="flex items-stretch ~gap-[10px]/[20px] text-white font-bold">
                    <div className="bg-secondary p-5 aspect-[1/1] ~w-[50px]/[80px] ~h-[50px]/[80px] flex items-center justify-center ~text-[20px]/[30px]">{i+1}</div>
                    <div className="bg-primary flex-1 flex items-center ~px-[20px]/[30px] py-3 leading-snug">{c.content}</div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

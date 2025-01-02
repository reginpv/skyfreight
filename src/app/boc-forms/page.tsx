import BannerInnerExpanded from "@/components/BannerInnerExpanded"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "BOC Forms",
  description: "BOC forms",
}

export default function BOCForms() {
  return (
    <>
      <BannerInnerExpanded 
        title="BOC <strong>forms</strong>"
        content="Save time and download the Bureau of Customs (BOC) forms ahead!"
      />
    </>
  )
}

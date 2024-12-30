import StatCount from "@/components/StatCount"
import BlogSlider from "@/components/BlogSlider"
import TemplateDefault from "@/components/templates/Default"
import BannerHome from "@/components/BannerHome"
import { Metadata } from "next"
import { PUBLIC_SITENAME } from "@/config/constants"

export const metadata: Metadata = {
  title: `${PUBLIC_SITENAME}`,
  description: `Welcome to ${PUBLIC_SITENAME}`,
}

export default async function Home() {

  return (
    <TemplateDefault>
      <section>
        <BannerHome />
        <BlogSlider />
        <StatCount />
      </section>
    </TemplateDefault>
    
  )
}

import StatCount from "@/components/StatCount"
import BlogSlider from "@/components/BlogSlider"
import TemplateDefault from "@/components/templates/Default"
import BannerHome from "@/components/BannerHome"

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

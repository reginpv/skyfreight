import StatCount from "@/components/StatCount"
import BlogSlider from "@/components/BlogSlider"
import TemplateDefault from "@/components/templates/Default"

export default async function Home() {

  return (
    <TemplateDefault>
      <section>
        <BlogSlider />
        <StatCount />
      </section>
    </TemplateDefault>
    
  )
}

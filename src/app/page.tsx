import TemplateDefault from "@/components/templates/Default"
import StatCount from "@/components/StatCount"
import BlogSlider from "@/components/BlogSlider"

export default async function Home() {

  return (
    <TemplateDefault>
      <BlogSlider />
      <StatCount />
    </TemplateDefault>
  )
}

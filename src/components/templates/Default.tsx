import Header from "@/components/globals/Header"
import Bottom from "@/components/globals/Bottom"
import Footer from "@/components/globals/Footer"
import Drawer from "@/components/globals/Drawer"

export default function TemplateDefault({ children }: Props) {
  
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Bottom />
      <Footer />
      <Drawer />
    </>
  )
}
import Aside from "@/components/globals/Aside"
import Drawer from "@/components/globals/Drawer"
import FooterAdmin from "../globals/FooterAdmin"
import HeaderAdmin from "../globals/HeaderAdmin"

export default function TemplateDashboard({ className, children }: Props) {
  
  return (
    <>
      <HeaderAdmin />
      <main className="flex-1 flex md:gap-5 bg-white">
        <Aside />
        <section className={`flex-1 py-5 px-5 ${className}`}>
          {children}
        </section>
      </main>
      <FooterAdmin />
      <Drawer />
    </>
  )
}
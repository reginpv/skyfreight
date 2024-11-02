import Header from "@/components/globals/Header"
import Footer from "@/components/globals/Footer"

export default function TemplateDefault({ children }: Props) {
  
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  )
}
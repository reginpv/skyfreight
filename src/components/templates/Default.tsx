import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function TemplateDefault({ children }: Props) {
  
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
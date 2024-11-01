import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function TemplateDefault({ children }: Props) {
  
  return (
    <>
      <Header />
      <main className="container mx-auto space-y-page py-page">{children}</main>
      <Footer />
    </>
  )
}
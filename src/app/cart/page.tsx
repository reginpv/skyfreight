import { Metadata } from "next"
import CartDetails from "@/components/CartDetails"

export const metadata: Metadata = {
  title: "Cart",
  description: "Cart",
}

export default function Cart() {
  return (
    <section className="page">
      <div className="container container--custom">
        <CartDetails />
      </div>
    </section>
  )
}

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cart",
  description: "Cart",
}

export default function Cart() {
  return (
    <section className="page">
      <div className="container container--custom">

        <div className="flex flex-col gap-5">
          <div>
            <h1>Cart</h1>
          </div>

          <div>
            <p>Coming soon...</p>
          </div>
        </div>
        
      </div>
    </section>
  )
}

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shipping rates",
  description: `Shipping rates`,
}

export default function Home() {
  return (
    <section className="page">
      <div className="container container--custom">

        <div className="flex flex-col gap-5">
          <div>
            <h1>Shipping rates</h1>
          </div>

          <div>
            <p>Coming soon...</p>
          </div>
        </div>
        
      </div>
    </section>
  )
}

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tracking",
  description: `Tracking`,
}

export default function Home() {
  return (
    <section className="page">
      <div className="container container--custom">

        <div className="flex flex-col gap-5">
          <div>
            <h1>Tracking</h1>
          </div>

          <div>
            <p>Coming soon...</p>
          </div>
        </div>
        
      </div>
    </section>
  )
}

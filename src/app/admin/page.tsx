import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admin",
  description: "Admin",
}

export default function Admin() {
  return (
    <section className="bg-white">
      <div className="">
        <div className="flex flex-col gap-5">
          <h1 className="h3">Dashboard</h1>
          <p>Coming soon...</p>
        </div>
      </div>
    </section>
  )
}

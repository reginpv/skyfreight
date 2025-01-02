import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services Admin",
  description: "Services Admin",
}

export default function AdminServices() {
  return (
    <section className="bg-white">
      <div className="">
        <div className="flex flex-col gap-5">
          <h1 className="h3">Services</h1>
          <p>Coming soon...</p>
        </div>
      </div>
    </section>
  )
}

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Settings Admin",
  description: "Settings Admin",
}

export default function AdminSettings() {
  return (
    <section className="bg-white">
      <div className="">
        <div className="flex flex-col gap-5">
          <h1 className="h3">Settings</h1>
          <p>Coming soon...</p>
        </div>
      </div>
    </section>
  )
}

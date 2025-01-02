import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Users Admin",
  description: "Users Admin",
}

export default function AdminUsers() {
  return (
    <section className="bg-white">
      <div className="">
        <div className="flex flex-col gap-5">
          <h1 className="h3">Users</h1>
          <p>Coming soon...</p>
        </div>
      </div>
    </section>
  )
}

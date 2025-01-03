import FormUser from "@/components/forms/FormUser"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Users Add Admin",
  description: "Users Add Admin",
}

// ONLY SUPER ADMIN CAN ADD ADMIN USER

export default function AdminUsersAdd() {
  return (
    <section className="bg-white">
      <div className="flex flex-col gap-7">

        <div className="flex flex-col gap-5">
          <h1 className="h3">Add a user</h1>
        </div>

        <div>Create a user.</div>

        <div>
          <FormUser />
        </div>

      </div>
    </section>
  )
}

import { Metadata } from "next"
import { getUsers } from "@/lib/actions/user"

export const metadata: Metadata = {
  title: "Users Admin",
  description: "Users Admin",
}

export default async function AdminUsers() {

  const user = await getUsers()
  const users = user.users

  return (
    <section className="bg-white">
      <div className="flex flex-col gap-10">
        
        <div className="flex flex-col gap-5">
          <h1 className="h3">Users</h1>
          <p>Manage your users here.</p>
        </div>

        <div>
          {
            users.length > 0 ? 
              <div className="flex flex-col border">
                <div className="flex font-bold border-b [&_div]:border-r last:[&_div]:border-r-0 [&_div]:py-3 [&_div]:px-3">
                  <div className="~w-[40px]/[50px] flex justify-center">ID</div>
                  <div className="flex-1">Name (email)</div>
                  <div className="w-[75px]">Orders</div>
                </div>
                {
                  users.map((user, i)=>(
                    <div key={i} className="flex border-b last:border-b-0 [&_div]:border-r last:[&_div]:border-r-0 [&_div]:py-3 [&_div]:px-3">
                      <div className="~w-[40px]/[50px] flex justify-center">{user.id}</div>  
                      <div className="flex-1 break-all">{user.name} ({user.email})</div>
                      <div className="w-[75px]">{user._count.orders}</div>
                    </div>
                  ))
                }
              </div> : 
              <div>No users found.</div>
          }
        </div>

      </div>
    </section>
  )
}

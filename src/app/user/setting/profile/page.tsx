import { getServerSession } from "next-auth"
import { Metadata } from "next"
import FormProfile from "@/components/forms/FormProfile"
import { authOptions } from "@/lib/authOptions"

export const metadata: Metadata = {
  title: "Profile details",
  description: `Profile details`,
}


export default async function UserSettingProfile() {

  const session = await getServerSession(authOptions)
  const { user } = session

  return (
    <section className="flex flex-col gap-5 page">

      <div className="container container--custom flex flex-col gap-5">

        <div className="flex justify-between items-center gap-10">
          <h1 className="h2">My profile</h1>
        </div>

        <div>
          <p>Update your profile details here.</p>
        </div>

        <div className="mt-5">
          {
            session && user && user.image ?
              <div className="flex gap-3 items-center">
                <div className="rounded-full overflow-hidden h-[48px] w-[48px]">
                  <img src={user.image} alt={user.name} height={48} width={48} />
                </div>
                <div>
                  <div className="font-semibold leading-none">{user.name}</div>
                  <div className="text-sm opacity-90">{user.email}</div>
                </div>
              </div> :
              <div className="rounded-full overflow-hidden h-[48px] w-[48px] bg-black text-white flex items-center justify-center text-2xl font-bold leading-none">
                {session && user && user.name?.charAt(0)}
              </div>
          }
        </div>
        <FormProfile editing={user} />

      </div>
      
    </section>
  )
}
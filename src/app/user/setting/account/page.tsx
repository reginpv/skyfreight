import Link from "next/link"
import { getServerSession, Session } from "next-auth"
import { Metadata } from "next"
import { authOptions } from "@/lib/authOptions"
import ButtonDeleteAccount from "@/components/ui/ButtonDeleteAccount"

export const metadata: Metadata = {
  title: "Account",
  description: "Account",
}

export default async function Account() {

  const session = await getServerSession(authOptions) as Session | null
  return (
    <section className="page">

      <div className="container container--custom">

        <div className="flex flex-col gap-5">

          <div className="flex justify-between items-center gap-10">
            <h1 className="h2">Account</h1>
          </div>
          
          <div>
            <p>Here you can find details about your account.</p>
          </div>

          <div className="flex flex-col gap-7">

            {/** User */}
            <div>
              <p className="m-1 font-semibold text-lg">User details:</p>
              <div className="border bg-gray-200 gap-[1px] flex flex-col">
                
                <div className="flex gap-3 p-5 bg-white justify-between">
                  <div className="flex gap-3 items-center">
                    <div>Account name:</div>
                    <div>{session.user.name}</div>
                  </div>
                  <div>
                    <Link href="/user/setting/profile" className="button button--default">Edit</Link>
                  </div>
                </div>

                <div className="flex gap-3 p-5 bg-white justify-between">
                  <div className="flex gap-3 items-center">
                    <div>Email:</div>
                    <div className="truncate">{session.user.email}</div>
                  </div>
                  <div>
                    <Link href="/user/setting/profile" className="button button--default">Edit</Link>
                  </div>
                </div>

              </div>
            </div>

            

            {/** Danger */}
            <div>
              <div className="border gap-[1px] flex flex-col bg-rose-100 border-rose-300 text-rose-500 text">

                <div className="flex flex-col sm:flex-row gap-10 p-5 items-center justify-between">

                  <div className=" flex-1 sm:flex-none">
                    <p className="font-semibold text-lg leading-none mb-1">WARNING:</p>
                    <div>Deleting your account is permanent.<br />This action will remove all data and analytics associated with your account, and this action cannot be undone.</div>
                  </div>
                  <div>
                    <ButtonDeleteAccount />
                  </div>

                </div>            

              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

"use client"

import { usePathname } from "next/navigation"
import { useSession } from "next-auth/react"
import { useGlobal } from "@/store/useGlobal"
import menuJson from "@/data/menu.json"
import ButtonGoogle from "@/components/ui/ButtonGoogle"
import ButtonCloseDrawer from "@/components/ui/ButtonCloseDrawer"
import Link from "next/link"
import { ButtonSignOut } from "@/components/ui/ButtonsAuth"

export default function Drawer() {

  const { data: session, status }:any = useSession()
  const { drawer, setDrawer } = useGlobal((state:any) => state)
  const pathname = usePathname()

  if (status === 'loading') {
    return null
  } 

  return (
    <section data-ui="drawer" className={`bg-white fixed min-h-[100dvh] top-0 right-0 z-50 border border-l transition-all ease-in-out duration-300 ${drawer ? `w-full` : `w-0`}`}>
      <div className="border-b h-[94.5px] md:h-[134.5px] px-page flex items-center justify-between p-5 sticky top-0 z-10 bg-white">
        <div className="flex-1 flex items-center gap-2">
          {
            session && session.user ? <>
              <div className="rounded-full overflow-hidden">
                <img src={`${session.user.image}`} alt={session.user.name} width={42} height={42} />
              </div>
              <div>
                <div className="font-semibold leading-none">{session.user.name}</div>
                <div className="text-sm opacity-90">{session.user.email}</div>
              </div>
            </> : <ButtonGoogle />
          }
        </div>
        <ButtonCloseDrawer />
      </div>

      <nav className="pb-8 px-page flel flex-col flex-1">
        <ul className="flex-1">
          {menuJson.map((item, i) => {

            const isActive = pathname === item.slug

            return (
              <li key={i}>
                <Link
                  href={item.slug}
                  className={`text-[18px] border-b py-4 px-5 w-full flex truncate whitespace-nowrap ${isActive ? "active font-semibold" : ""}`}
                  onClick={()=>setDrawer(false)}
                >
                  {item.label}
                </Link>
              </li>
            )

          })}

          {/** User */}
          {
            session && session.user &&
              <>              
                <li>
                  <Link 
                    href="/user/setting/account"
                    className={`text-[18px] border-b py-4 px-5 w-full flex truncate whitespace-nowrap`}
                    onClick={()=>setDrawer(false)}
                  >Account</Link>
                </li>
                <li>
                  <Link 
                    href="/user/setting/profile"
                    className={`text-[18px] border-b py-4 px-5 w-full flex truncate whitespace-nowrap`}
                    onClick={()=>setDrawer(false)}
                  >Profile</Link>
                </li>
                <li>
                  <Link 
                    href="/user/setting/security"
                    className={`text-[18px] border-b py-4 px-5 w-full flex truncate whitespace-nowrap`}
                    onClick={()=>setDrawer(false)}
                  >Security</Link>
                </li>
                <li>
                  <ButtonSignOut className="py-4 px-5" />
                </li>
              </>
            }
        </ul>

        {/** Socials */}


      </nav>
    </section>
  )
}
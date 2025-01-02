"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useGlobal } from "@/store/useGlobal"
import { useSession } from "next-auth/react"
import Logo from "@/components/ui/Logo"
import { Icon } from "@/components/ui/Icons"
import DrawerProfileAdmin from "@/components/DrawerProfileAdmin"
import { ButtonSignIn } from "@/components/ui/ButtonsAuth"

export default function HeaderAdmin() {

  const { data: session, status }:any = useSession()

  const [scrolled, setScrolled] = useState(false)

  const { setDrawer } = useGlobal((state:any) => state)

  useEffect(() => {
    const handleScroll = debounce(() => {
      setScrolled(window.scrollY > 10)
    }, 50) // Adjust delay as needed (e.g., 100ms)

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  function debounce<T extends (...args: any[]) => void>(func: T, delay: number): (...args: Parameters<T>) => void {
    let timeout: ReturnType<typeof setTimeout>
  
    return (...args: Parameters<T>) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => func(...args), delay)
    }
  }

  return (
    <header className={`animated sticky top-0 z-30 py-0 bg-white border-b ${scrolled && `shadow-md`}`}>
      <div className="header__container px-5">
        <div className="header__content flex items-center justify-between gap-5">

          {/** Left */}
          <div className="py-2 relative flex items-center gap-5 font-bold">
            <Logo width={50} height={50} />
            <p>Admin</p>
          </div>

          {/** Right */}
          <div className="flex items-center ~gap-[15px]/[20px]">

            <div className="hidden md:flex gap-7 items-center">
              <ul className="flex items-center gap-5">
                <li>
                  <Link href="/">View Site</Link>
                </li>
                <li>
                  <Link href="/admin">Dashboard</Link>
                </li>
              </ul>
            </div>
            
            <div className="hidden md:flex">
              {
                status === "loading" ? 
                  <div className="h-[30px] w-[30px]"></div> :
                    session && session.user ?
                      <DrawerProfileAdmin /> :
                      <div className="flex ~gap-[10px]/[20px] items-center">
                        <div>
                          <ButtonSignIn className="button button--primary-inverted px-5 rounded-full font-bold" />
                        </div>
                        <div>
                          <Link href="/signup" className="button button--primary rounded-full px-5 font-bold border-[3px] border-primary">Register</Link>
                        </div>
                      </div>
              }
            </div>

            {/** Hamb */}
            <div className="flex md:hidden items-center">
              <button onClick={()=>setDrawer(!!true)}>
                <Icon icon="menu" className="fill-primary" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </header>
  )
}
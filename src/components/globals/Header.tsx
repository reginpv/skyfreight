"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useGlobal } from "@/store/useGlobal"
import { useSession } from "next-auth/react"
import Nav from "@/components/globals/Nav"
import LogoFull from "@/components/ui/LogoFull"
import { Icon } from "@/components/ui/Icons"
import DrawerProfile from "../DrawerProfile"
import { ButtonSignIn } from "@/components/ui/ButtonsAuth"

export default function Header() {

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
    <header className={`animated sticky top-0 z-30 ${scrolled && `py-0 shadow-md bg-white`}`}>
      <div className="header__container">
        <div className="header__content flex items-center justify-between gap-5">

          {/** Left */}
          <div className="py-2 px-5 relative flex items-center">
            <div className="bg-primary px-5 flex max-h-[60px] clippy clippy--top overflow-visible absolute left-0 w-[310px] -z-10 h-[60px] top-1/2 -translate-y-1/2 shadow-lg"></div>
            <LogoFull />
          </div>

          {/** Right */}
          <div className="flex items-center ~gap-[20px]/[40px] pr-5">

            <div className="hidden md:flex gap-7 items-center">
              <Nav />
            </div>
            
            <div className="hidden md:flex">
              {
                status === "loading" ? 
                  <div className="h-[30px] w-[30px]"></div> :
                    session && session.user ?
                      <DrawerProfile /> :
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
"use client"

import { useEffect, useState } from "react"
import debounce from "lodash.debounce"
import Link from "next/link"
import { useSession } from "next-auth/react"
import Nav from "@/components/globals/Nav"
import LogoFull from "@/components/ui/LogoFull"
import { ButtonSignOut } from "@/components/ui/ButtonsAuth"
import { Icon } from "@/components/ui/Icons"

export default function Header() {

  const { data: session, status }:any = useSession()

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = debounce(() => {
      setScrolled(window.scrollY > 50)
    }, 100) // Adjust delay as needed (e.g., 100ms)

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header className={`animated sticky top-0 bg-white z-30`}>
      <div className="header__container">
        <div className="header__content flex justify-between gap-5 items-center">

          {/** Left */}
          <div className="py-2 px-5 relative flex items-center">
            <div className="bg-primary px-5 flex max-h-[60px] clippy clippy--top overflow-visible absolute left-0 w-[310px] -z-10 h-[60px] top-1/2 -translate-y-1/2 shadow-lg"></div>
            <LogoFull />
          </div>

          {/** Right */}
          <div className="flex items-center">
            <div className="hidden md:flex px-5 gap-7 items-center">
              <Nav />
              {
                session ?
                  <ButtonSignOut /> :
                  <div className="gap-5 items-center hidden lg:flex">
                    <Link href="/login" className="button button--primary">Login</Link>
                    <Link href="/signup" className="button button--primary">Signup</Link>
                  </div>
              }
            </div>
            <div className="flex lg:hidden pr-5">
              <Icon icon="menu" className="fill-primary w-[32px] h-[32px]" />
            </div>
          </div>
          

        </div>
      </div>
    </header>
  )
}
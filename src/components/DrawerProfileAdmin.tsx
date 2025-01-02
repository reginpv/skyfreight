"use client"

import { useGlobal } from "@/store/useGlobal" 
import Link from "next/link"
import { useSession } from "next-auth/react"
import { ButtonSignOut } from "@/components/ui/ButtonsAuth"
import { useEffect, useRef } from "react"
import { isAdmin, isSuperadmin } from "@/lib/helper"

export default function DrawerProfileAdmin({
  className
}: {
  className?: string
}) {
  const { drawerProfile, setDrawerProfile } = useGlobal((state: any) => state)
  const { data: session, status }:any = useSession()
  const drawerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        setDrawerProfile(false)
      }
    }

    if (drawerProfile) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [drawerProfile, setDrawerProfile])

  if (status === 'loading') {
    {/** Show skeleton */}
    return (<div className="animate-pulse w-[34px] h-[34px] border-2 rounded-full animated flex items-center justify-center">...</div>)
  }

  if (status === 'unauthenticated' || !session || !session.user) {
    return (
      <div ref={drawerRef} onClick={() => setDrawerProfile(drawerProfile ? false : true)} className="relative rounded-full h-[34px] w-[34px] cursor-pointer border-2 border-transparent hover:border-gray-300 animated flex items-center justify-center text-white bg-black">
        <span>&nbsp;</span> {/* Replace this with a default placeholder if you prefer */}
      </div>
    )
  }

  return (
    <section data-component="drawer-mini" ref={drawerRef} onClick={() => setDrawerProfile(drawerProfile ? false : true)} className={`${className} relative rounded-full cursor-pointer border-2 border-transparent hover:border-gray-300 animated flex items-center justify-center text-white ${!session.user.image && `bg-black`}`}>
      {session && session.user.image ? (
        <img src={session.user.image} alt={session.user.name + ""} height={38} width={38} className="rounded-full border-primary border-[3px] aspect-[1/1] w-[38px] h-[38px]" />
      ) : (
        <span>{session.user.name.charAt(0)}</span>
      )}

      <div className={`absolute right-0 top-[calc(100%+10px)] text-b z-30 bg-white border w-[280px] rounded-lg ${drawerProfile ? `inline-block` : `hidden`}`}>
        <div className="p-5 ">
          <div className="font-semibold text-black">{session.user.name}</div>
          <div className="text-gray-500"><small>{session.user.email}</small></div>
        </div>
        <hr />
        <ul className="flex flex-col p-3 text-gray-500">
          {
            [
              {
                "url": "/user/setting/account",
                "label": "Account"
              },
              {
                "url": "/user/setting/profile",
                "label": "Profile"
              },
              {
                "url": "/user/setting/security",
                "label": "Security"
              }
            ].map((item, i)=>(
              <li key={i} className="">
                <Link href={item.url} className="hover:bg-gray-200 p-2 hover:text-black rounded-lg animated block">{item.label}</Link>
              </li>
            ))
          }

          {
            session && session.user && isAdmin(session.user.id) && <li className="">
              <Link href="/admin" className="hover:bg-gray-200 p-2 hover:text-black rounded-lg animated block">Admin</Link>
            </li>
          }

          {
            isSuperadmin(session.user.role) && <li className="">
              <Link href="/admin" className="hover:bg-gray-200 p-2 hover:text-black rounded-lg animated block">Admin</Link>
            </li>
          }

        </ul>
        <hr />
        <div className="p-5 text-gray-500 hover:text-black">
          <ButtonSignOut />
        </div>
      </div>
    </section>
  )
}
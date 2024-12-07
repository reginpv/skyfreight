"use client"

import Image from "next/image"
import { usePathname } from "next/navigation"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useGlobal } from "@/store/useGlobal"
import { isAdmin } from "@/lib/helper"
import menuJson from "@/data/menu.json"

// Fetcher function for useSWR
const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function Drawer() {

  const { data: session, status }:any = useSession()
  const { drawer, setDrawer } = useGlobal((state:any) => state)
  const pathname = usePathname()

  if (status === 'loading') {
    return (<div>...</div>)
  } 

  return (
    <section data-ui="drawer" className={`bg-white fixed min-h-[100dvh] top-0 right-0 z-50 border border-l transition-all ease-in-out duration-300 ${drawer ? `w-full` : `w-0`}`}>
      <div className="border-b h-[94.5px] px-page flex items-center justify-end p-5 sticky top-0 z-10 bg-white">
        <button onClick={()=>setDrawer(false)}>
          <Image src="/images/icon-close.png" alt="close" width="32" height="32" />
        </button>
      </div>
      <nav className="pb-8 px-page flel flex-col flex-1">
        <ul className="flex-1">
          {menuJson.map((item, i) => {

            const isActive = pathname === item.slug

            return (
              <li key={i}>
                <a
                  href={item.slug}
                  className={`text-[18px] border-b py-4 px-5 w-full flex truncate whitespace-nowrap ${isActive ? "active font-semibold" : ""}`}
                >
                  {item.label}
                </a>
              </li>
            )

          })}
        </ul>

        {/** Socials */}

      </nav>
    </section>
  )
}
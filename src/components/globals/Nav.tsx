"use client"

import { usePathname } from "next/navigation"
import { Icon } from "@/components/ui/Icons"
import menuJson from "@/data/menu.json"

export default function Nav() {

  const pathname = usePathname()
  
  return (
    <>
      <nav className="text-primary">
        <ul className="flex items-center ~gap-[20px]/[40px]">
          {menuJson.map((item, i) => {

            const isActive = pathname === item.slug

            return (
              <li key={i}>
                <a
                  href={item.slug}
                  className={isActive ? "active font-semibold" : ""}
                >
                  {item.label}
                </a>
              </li>
            )
            
          })}
        </ul>
      </nav>
    </>
  )
}

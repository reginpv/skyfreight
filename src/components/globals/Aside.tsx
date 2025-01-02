import Link from "next/link"
import menuJson from "@/data/menu-admin.json"

export default function Aside({ 
  className 
}:{ 
  className?:string 
}) {

  const menu = menuJson

  return (
    <aside className={`${className ?? className} md:px-5 animated border-r py-5 md:pr-5 flex flex-col justify-between ml-[-220px] md:ml-0 min-w-[220px] bg-white border-gray-200`}>
      <nav className="flex-1 ">
        <ul className="flex flex-col sticky top-[87px]">
          {
            menu.map((m, i)=>(
              <li key={i} className="py-1">
                <Link href={m.slug} className="hover:text-black">{m.label}</Link>
                {
                  m.submenu && <ul className="flex flex-col ml-3">
                    {
                      m.submenu.map((sm, i)=>(
                        <li key={i} className="py-1 mt-1">
                          <Link href={sm.slug} className="hover:text-black">{sm.label}</Link>
                        </li>
                      ))
                    }
                  </ul>
                }
              </li>
            ))
          }
        </ul>
      </nav>

      <nav>
        <ul>
          <li>
            <Link href="/admin/setting">Settings</Link>
          </li>
        </ul>
      </nav>

    </aside>
  )
}
import Nav from "@/components/globals/Nav"
import LogoFull from "@/components/ui/LogoFull"
import Link from "next/link"
export default function Header() {
  return (
    <header className="animated">
      <div className="header__container">
        <div className="header__content flex justify-between gap-5 items-center">

          {/** Left */}
          <div className="py-2 px-5 relative flex items-center">
            <div className="bg-primary px-5 flex max-h-[60px] clippy clippy--top overflow-visible absolute left-0 w-[310px] -z-10 h-[60px] top-1/2 -translate-y-1/2 shadow-lg"></div>
            <LogoFull />
          </div>

          {/** Right */}
          <div className="hidden md:flex px-5 gap-7 items-center">
            <Nav />

            <div className="flex gap-5 items-center">
              <Link href="/login" className="button button--primary">Login</Link>
              <Link href="/signup" className="button button--primary">Signup</Link>
            </div>

          </div>

        </div>
      </div>
    </header>
  )
}
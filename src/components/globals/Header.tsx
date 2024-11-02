import Nav from "@/components/globals/Nav"
import Logo from "@/components/ui/Logo"
export default function Header() {
  return (
    <header>
      <div className="header__container container container--custom">
        <div className="header__content flex justify-between gap-5 items-center">
          <div>
            <Logo />
          </div>
          <div>
            <Nav />
          </div>
        </div>
      </div>
    </header>
  )
}
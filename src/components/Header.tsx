import Image from "next/image"
export default function Header() {
  return (
    <header>
      <div className="header__container container container--custom">
        <div className="header__content flex justify-between gap-5">
          <div>
            LOGO
          </div>
          <nav>Nav</nav>
        </div>
      </div>
    </header>
  )
}
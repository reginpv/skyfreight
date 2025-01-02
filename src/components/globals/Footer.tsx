import { PUBLIC_SITENAME } from "@/config/constants"

export default function Footer() {
  return(
    <footer className="bg-primary text-white">
      <div className="footer__container container container--custom flex flex-col gap-3">
        <div className="text-center text-xs">
          &copy; {new Date().getFullYear()} - { PUBLIC_SITENAME }
        </div>
      </div>
    </footer>
  )
}
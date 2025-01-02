import { PUBLIC_SITENAME } from "@/config/constants"

export default function FooterAdmin() {
  return(
    <footer className="footer border-t border-gray-200 bg-white">
      <div className="footer__container px-5">
        <div className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} - { PUBLIC_SITENAME }
        </div>
      </div>
    </footer>
  )
}
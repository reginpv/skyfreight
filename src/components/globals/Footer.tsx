export default function Footer() {
  return(
    <footer className="bg-primary text-white">
      <div className="footer__container container container--custom">
        <div className="text-center">
          &copy; {new Date().getFullYear()} - Sky Freight Oman
        </div>
      </div>
    </footer>
  )
}
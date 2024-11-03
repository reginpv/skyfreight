import Link from "next/link"
import Image from "next/image"
import { PUBLIC_SITENAME } from "@/config/constants"

export default function LogoFull() {
  return (
    <Link href="/" className="inline-flex gap-2 items-center">
      <div>
        <Image src="/images/sky-freight-oman-logo.png" width={50} height={50} alt={PUBLIC_SITENAME} />
      </div>
      <div>
        <Image src="/images/sky-freight-oman-logo-text.png" className="max-w-[150px]" width={279} height={53} alt={PUBLIC_SITENAME} />
      </div>
    </Link>
  )
}
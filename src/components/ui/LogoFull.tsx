import Link from "next/link"
import Image from "next/image"
import { PUBLIC_SITENAME } from "@/config/constants"

export default function LogoFull({ size }: {size?: string }) {

  let logo = [80, 80]
  let logoText = [279, 53]

  if(size === 'md') {
    logo = [50, 50]
    logoText = [150, 28]
  }

  return (
    <Link href="/" className="inline-flex gap-2 items-center">
      <div>
        <Image src="/images/sky-freight-oman-logo.png" width={logo[0]} height={logo[1]} alt={PUBLIC_SITENAME} />
      </div>
      <div>
        <Image src="/images/sky-freight-oman-logo-text.png" className="max-w-[160px]" width={logoText[0]} height={logoText[1]} alt={PUBLIC_SITENAME} />
      </div>
    </Link>
  )
}
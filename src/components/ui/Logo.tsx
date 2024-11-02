import Link from "next/link"
import Image from "next/image"
export default function Logo() {
  return (
    <Link href="/">
      <Image src="/images/sky-freight-oman-logo.png" width={80} height={80} alt="Sky Freight Oman" />
    </Link>
  )
}
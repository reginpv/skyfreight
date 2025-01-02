import Link from "next/link"
import Image from "next/image"
export default function Logo({
  height,
  width
}: {
  height?: number,
  width?: number
}) {
  return (
    <Link href="/">
      <Image src="/images/sky-freight-oman-logo.png" width={width || 80} height={height || 80} alt="Sky Freight Oman" />
    </Link>
  )
}
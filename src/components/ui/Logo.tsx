import Link from "next/link"
import Image from "next/image"
export default function Logo({
  link,
  height,
  width
}: {
  link?: string,
  height?: number,
  width?: number
}) {
  return (
    <Link href={link || "/"}>
      <Image src="/images/sky-freight-oman-logo.png" width={width || 80} height={height || 80} alt="Sky Freight Oman" />
    </Link>
  )
}
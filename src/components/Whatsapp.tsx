import Image from "next/image"
import { PUBLIC_SM_WHATSAPP } from "@/config/constants"

export default function Whatsapp() {
  return (
    <div className="fixed bottom-5 right-5 z-30">
      <a href={PUBLIC_SM_WHATSAPP} target="_blank" rel="noreferrer">
        <Image src="/images/icon-whatsapp.png" alt="Whatsapp" width={50} height={50} />
      </a>
    </div>
  )
}
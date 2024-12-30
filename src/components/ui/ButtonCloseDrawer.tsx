import Image from "next/image"
import { useGlobal } from "@/store/useGlobal"

export default function ButtonCloseDrawer() {

  const { setDrawer } = useGlobal()

  return (
    <button onClick={()=>setDrawer(false)}>
      <Image src="/images/icon-close.png" alt="close" width="32" height="32" />
    </button>
  )
}
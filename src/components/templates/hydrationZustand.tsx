// This is a workaround with hydration issue with Next.js server elements
// different from client

"use client"

import { useEffect, useState } from "react"

export default function HydrationZustand({ children }: Props) {

  const [ isHydrated, setIsHydrated ] = useState(false)

  useEffect(()=>{
    setIsHydrated(true)
  },[])

  return <>
    {isHydrated ? children : null}
  </>

}
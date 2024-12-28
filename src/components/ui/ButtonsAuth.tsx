"use client"

import { signIn, signOut } from "next-auth/react"

export function ButtonSignIn({
  className
}:{
  className?: string
}) {
  return <button className={className} onClick={() => signIn()}>Login</button> 
}

export function ButtonSignOut({
  className
}:{
  className?: string
}) {
  return <button className={className} onClick={() => signOut()}>Logout</button>
}
'use client'

import { signIn, signOut } from 'next-auth/react'

export function ButtonSignIn() {
  return <button onClick={() => signIn()}>Login</button> 
}

export function ButtonSignOut() {
  return <button onClick={() => {

    // Logout sess
    signOut()

  }}>Logout</button>
}
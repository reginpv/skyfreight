'use client'

import Image from 'next/image'
import { signIn } from 'next-auth/react'

export default function ButtonGoogle() {
  return (
    <button
      onClick={() => signIn("google")}
      className="button font-semibold py-2 border flex items-center gap-2 justify-center"
    >
      <Image src="/images/logo-google.svg" height={24} width={24} alt="Login via Google" />
      <span>Sign in with Google</span>
    </button>
  )
}
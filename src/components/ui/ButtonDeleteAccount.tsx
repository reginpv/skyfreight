"use client"

import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import { deleteUser } from "@/lib/actions/me/user"
import { signOut } from "next-auth/react"

export default function ButtonDeleteAccount() {

  const router = useRouter()
  const [ pending, setPending ] = useState(false)

  async function handleSubmit(e: FormEvent) {

    e.preventDefault()

    setPending(true)

    // Confirm action with the user
    const userConfirmed = confirm(
      "Are you sure? There's no going back from here!"
    )

    // If user cancels, stop further execution
    if (!userConfirmed) {
      setPending(false)
      return
    }

    const result = await deleteUser()
    
    if (result.success) {

      // TODO: TBD send going away email?
      // setPending(false)
      signOut()
      router.push(`/`)

    } else {

      alert(`Account deletion failed: Please contact administrator.`)
      
    }

  }

  return(
    <form onSubmit={handleSubmit}>
      <button className={`button button--danger font-semibold uppercase disabled:animate-pulse`} disabled={pending}>
        {
          pending ? `Deleting account, please wait...` : `Permanently DELETE my account`
        }
      </button>
    </form>
    
  )
}
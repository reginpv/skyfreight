"use client"

import { useState, FormEvent } from "react"
import FormMessage from "@/components/FormMessage"
import { createUser } from "@/lib/actions/user"
import { useSession } from "next-auth/react"

export default function FormUser() {

  const [ pending, setPending ] = useState(false)
  const [ formMessage, setFormMessage ] = useState({})
  const { data: session, status } = useSession()

  async function handleSubmit(e: FormEvent) {

    e.preventDefault()
    setPending(true)

    let err = []

    const formData = new FormData(e.target as HTMLFormElement)
    const data = Object.fromEntries(formData)
    
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        if (!data[key]) {
          err.push(`${key} is required.`)
        }
      }
    }

    if (err.length) {
      setFormMessage({
        success: false,
        payload: err
      })
      setPending(false)
      return
    }

    // Call the API to create the user
    const res = await createUser(formData)
    
    if (res.success) {

      setFormMessage({
        success: true,
        payload: ["User added successfully"]
      })
      setPending(false)
      

    } else {

      setFormMessage({
        success: false,
        payload: res.payload
      })
      setPending(false)      

    }


  }

  if(status === 'loading') {
    return <div>Loading...</div>
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">

      <FormMessage message={formMessage} />

      <div>
        <input type="text" name="name" placeholder="Name" />
      </div>
      <div>
        <input type="text" name="email" placeholder="Email address" />
      </div>
      <div>
        <input type="password" name="password" placeholder="Password" />
      </div>
      
      {
        session?.user.role === '9' && 
          <div>
            <select name="role">
              <option value="1">Select a user type</option>
              <option value="1">User</option>
              <option value="8">Admin</option>
            </select>
          </div>
      }
      
      <div className="flex justify-end">
        <button className="button button--primary" disabled={pending}>
          {
            pending
              ? "Adding user..."
              : "Add user"
          }
        </button>
      </div>
    </form>
  )
}
"use client"

import { FormEvent, useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { updateUser } from "@/lib/actions/me/user"
import { useRouter } from "next/navigation"

export default function FormProfile({ editing }: {editing: any}) {

  const router = useRouter()
  const { data: session, status, update }:any = useSession()
  const [ pending, setPending ] = useState(false)
  const [error, setError] = useState([])

  const [ stateFields, setStateFields ] = useState({
    id: '',
    name: '',
    email: '',
  })

  // Onload
  useEffect(()=>{

    setStateFields(editing)

  },[editing])

  async function handleSubmit(e: FormEvent) {

    e.preventDefault()
    
    setPending(true)
    
    const formData = new FormData(e.target as HTMLFormElement)
    const result = await updateUser(formData)

    setPending(false)
  
    if (result.success) {

      // Update session
      await update({
        name: result.user.name,
        email: result.user.email
      })

      router.refresh()

    } else {
      setError(result.errors || ["An unknown error occurred."])
    }
    
  }

  if (status === 'loading') {
    return (<div>...</div>)
  }

  return (
    <form 
      data-form="profile" 
      className={`space-y-5 ${pending && 'animate-pulse opacity-50'} max-w-lg`} 
      onSubmit={handleSubmit}
    >
      {error.length > 0 && (
        <p className=" bg-red-200 border-red-200 border py-3 mb-6 px-5" dangerouslySetInnerHTML={{__html: error}} />
      )}
      {/** Form row */}
      <div className="">
        <div className="flex flex-col">
          <input 
            type="text" 
            name="name" 
            placeholder="Your name" 
            value={stateFields.name}
            onChange={e=>setStateFields({...stateFields, name: e.target.value})}
          />
        </div>
      </div>
      <div className="">
        <div className="flex flex-col">
          <input 
            type="text" 
            name="email"
            placeholder="Your email" 
            value={stateFields.email}
            onChange={e=>setStateFields({...stateFields, email: e.target.value})}
          />
        </div>
      </div>

      {/** Design */}


      {/** Button */}
      <button className={`button button--default disabled:animate-pulse`} disabled={pending}>
        { pending ? `Updating...` : `Update` }
      </button>

    </form>
  )
}
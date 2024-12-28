"use client"

import { FormEvent, useState } from "react"
import { updateUser } from "@/lib/actions/user"

export default function FormSecurity() {

  const [ pending, setPending ] = useState(false)
  const [ error, setError ] = useState([])

  async function handleSubmit(e: FormEvent) {

    e.preventDefault()

    setPending(true)
        
    const formData = new FormData(e.target as HTMLFormElement)
    const result = await updateUser(formData)

    setPending(false)
  
    if (result.success) {

      // Update
      setError([])


    } else {
      setError(result.errors || ["An unknown error occurred."]);
    }
    
  }


  return (
    <form 
      data-form="profile" 
      className={`space-y-5 ${pending && 'animate-pulse opacity-50'} max-w-lg`} 
      onSubmit={handleSubmit}
    >
      
      {
        error.length > 0 && <div className="text-rose-500 py-3 px-5 bg-rose-100">
          <ul>
            {
              error.map((err, i)=>(
                <li key={i}>{err}</li>
              ))
            }
          </ul>
        </div>
      }

      {/** Form row */}
      <div className="">
        <div className="flex flex-col"> 
          <input 
            type="password" 
            name="password" 
            placeholder="Your new password here" 
          />
        </div>
      </div>
      <div className="">
        <div className="flex flex-col">
          <input 
            type="password" 
            name="passwordConfirm"
            placeholder="Confirm your new password" 
          />
        </div>
      </div>

      <input type="hidden" name="security" value="1" />

      {/** Design */}


      {/** Button */}
      <button className={`button button--default disabled:animate-pulse`} disabled={pending}>
        { pending ? `Updating Password` : `Update Password` }
      </button>

    </form>
  )
}
"use client"

import { useState } from "react"
import { isValidEmail } from "@/lib/helper"
import { ADMIN_EMAIL } from "@/config/constants"

export default function FormNewsletter():JSX.Element {

  const [ stateSending, setStateSending ] = useState(false)
  const [ stateFields, setStateFields ] = useState({
    email: ''
  })

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {

    e.preventDefault()

    const { email } = stateFields
    const message = document.querySelector('[data-message="newsletter"]')

    setStateSending(true)

    // Reset
    message?.classList.add('hidden')

    // Validate
    if(!isValidEmail(email)) {
      if(message) {
        message.classList.add('bg-red-100')
        message.classList.remove('hidden')
        message.innerHTML = `<strong class="underline">${stateFields.email}</strong> is invalid.`
      }
      setStateSending(false)
      return
    }

    const headers:any = {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(stateFields) 
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASEURL}/mailchimp`, headers)
    const data = await res.json()

    if(data.error_count > 0) {

      if(message) {
        message.classList.add('bg-red-100')
        message.classList.remove('hidden')
        message.innerHTML = `<strong>Oops</strong>: An error occured please contact us at: ${ADMIN_EMAIL}.`
      }
    
      setStateSending(false)

      return

    } else {

      // Email confirm
      const resEmail = await fetch(`${process.env.NEXT_PUBLIC_API_BASEURL}/mail/newsletter`, headers)
      const dataEmail = await resEmail.json()
      //console.log(`Data email: `, dataEmail)
      
      // Success
      if(message) {
        message.classList.add('bg-green-100')
        message.classList.remove('hidden')
        message.innerHTML = `<strong>Success!</strong>: Your email ${stateFields.email} is now subscribed!`
      }

      setStateSending(false)
      setStateFields({email:''})
      
    }


  }

  return (
    <form onSubmit={handleSubmit}>
      <div data-message="newsletter" className="mb-2 hidden py-2 px-3 text-left"></div>
      <div className="flex">
        <input type="text" name="email" value={stateFields.email} onChange={e=>setStateFields({...stateFields, email: e.target.value})} className="input" placeholder="Email" />
        <button className={`bg-[#ccc] px-2 w-full hover:bg-[#ddd] transition-all ease-in-out duration-200 max-w-[80px] md:max-w-[100px] ${stateSending ? `animate-pulse`: ``}`} disabled={stateSending}>
          {stateSending ? `Sending...` : `Send`}
        </button>
      </div>
    </form>
  )
}
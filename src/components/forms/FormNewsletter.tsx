"use client"

import { useState } from "react"

export default function FormNewsletter():JSX.Element {

  const [ stateSending, setStateSending ] = useState(false)
  const [ stateFields, setStateFields ] = useState({
    email: ''
  })

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {

    e.preventDefault()

    setStateSending(false)

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
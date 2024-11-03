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
        <input type="text" name="email" value={stateFields.email} onChange={e=>setStateFields({...stateFields, email: e.target.value})} className="input rounded-l-xl" placeholder="Email" />
        <button className={`button button--secondary rounded-r-xl ${stateSending ? `animate-pulse`: ``}`} disabled={stateSending}>
          {stateSending ? `Sending...` : `Subscribe`}
        </button>
      </div>
    </form>
  )
}
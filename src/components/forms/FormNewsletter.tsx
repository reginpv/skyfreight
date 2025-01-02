"use client"

import { useState } from "react"

export default function FormNewsletter():JSX.Element {

  const [ pending, setPending ] = useState(false)
  const [ stateFields, setStateFields ] = useState({
    email: ""
  })

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {

    e.preventDefault()

    setPending(false)

  }

  return (
    <form onSubmit={handleSubmit}>
      <div data-message="newsletter" className="mb-2 hidden py-2 px-3 text-left"></div>
      <div className="flex">
        <input type="text" name="email" value={stateFields.email} onChange={e=>setStateFields({...stateFields, email: e.target.value})} className="input rounded-l-full rounded-r-none" placeholder="Email" />
        <button className={`button button--secondary rounded-r-full px-5 font-semibold rounded-l-none`} disabled={pending}>
          {pending ? `Sending...` : `Subscribe`}
        </button>
      </div>
    </form>
  )
}
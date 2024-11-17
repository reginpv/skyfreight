'use client'

import { useRouter } from 'next/navigation'
import { ChangeEvent, useState } from 'react'
//import { useFlashMessage } from '@/store/useFlashMessage'
import { isValidEmail } from '@/lib/helper'
//import { EMAIL_NOTIFICATIONS, EMAIL_ADMIN } from '@/config/constants'
//import { useEmail } from '@/hooks/useEmail'

export default function FormPasswordReset() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formValues, setFormValues] = useState({
    email: "",
  })
  const [error, setError] = useState("")
  //const { showFlashMessage } = useFlashMessage((state:any) => state)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setLoading(true)

      const { email } = formValues

      if (email!=='' && isValidEmail(email)) {
        
        //router.push(callbackUrl)
        setError("")
        
        const options:any = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formValues)
        }
        const res = await fetch(`/api/crud/password-reset-token`, options)
        const pass = await res.json()

        if(pass.id) {

          // if success send email here
          // Settings is in config file
          // if(EMAIL_NOTIFICATIONS) {
          //   // Send email notification to admin
          //   const { token } = pass
          //   const res = await useEmail(email, {email, token}, 'passwordReset')
          // }

        } else {
          // We will not show if a user if found or not (security)
          // pass.error && setError(`${pass.message}`)
        }

        // showFlashMessage({
        //   message: `<p>An email with password reset link has been sent to ${email}.</p><p>If the email does not show up, please check your spam folder.</p>`,
        //   type: 'success' 
          
        // })
        router.push('/login')
        

      } else {
        setError("A valid email is required.")
      }

      setLoading(false)

    } catch (error: any) {
      setLoading(false)
      setError(error)
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value })
  }

  return (
    <form onSubmit={onSubmit}>
      {error && (
        <p className="text-center bg-red-200 py-3 mb-6">{error}</p>
      )}
      <div className="mb-6">
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          placeholder="Email address"
          className={`input`}
        />
      </div>
      <button
        type="submit"
        className="bg-[#ccc] py-3 px-5 w-full hover:bg-[#ddd] transition-all ease-in-out duration-200 disabled:opacity-50 disabled:hover:bg-[#ccc] disabled:cursor-not-allowed"
        disabled={loading}
      >
        {loading ? "loading..." : "Send Link"}
      </button>

    </form>
  )
}
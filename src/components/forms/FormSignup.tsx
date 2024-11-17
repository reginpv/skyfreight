'use client'

import { useRouter } from 'next/navigation'
import { ChangeEvent, useState } from 'react'
// import { useFlashMessage } from '../../store/useFlashMessage'
// import { useEmail } from '@/hooks/useEmail'

export default function FormSignup() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  })
  const [error, setError] = useState("")
  //const { showFlashMessage } = useFlashMessage((state:any) => state)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setLoading(true)

      const { name, email, password } = formValues

      if (name!=='' && email!=='' && password!=='') {
        
        //router.push(callbackUrl)
        setError("")
        
        const options:any = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formValues)
        }
        const res = await fetch(`/api/crud/user`, options)
        const user = await res.json()

        if(user.id) {

          // Welcome email
          // const res = await useEmail(email, {name, email}, 'welcome')

          // State flash
          // showFlashMessage({
          //   message: `Your account has been created. You can now login.`,
          //   type: 'success' 
          // })

          // Redirect to login so user can enter his new creds
          router.push('/login')
          
        } else {
          user.error && setError(`${user.message}`)
        }
        

      } else {
        setError("All fields are required!")
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
        <p className="text-center bg-red-300 py-3 mb-6">{error}</p>
      )}
      <div className="mb-6">
        <input
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          placeholder="Your name"
          className={`input`}
        />
      </div>
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
      <div className="mb-6">
        <input
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
          placeholder="Password"
          className={`input`}
        />
      </div>
      <p className="mb-6 small text-sm">By creating an account, you agree to our <a href="/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline">privacy policy</a>.</p>
      <button
        type="submit"
        className="bg-[#ccc] py-3 px-5 w-full hover:bg-[#ddd] transition-all ease-in-out duration-200 disabled:opacity-50 disabled:hover:bg-[#ccc] disabled:cursor-not-allowed"
        disabled={loading}
      >
        {loading ? "loading..." : "Signup"}
      </button>

    </form>
  )
}
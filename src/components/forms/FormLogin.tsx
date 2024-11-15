"use client"

import { signIn } from "next-auth/react"
import { useSearchParams, useRouter } from "next/navigation"
import { ChangeEvent, useState } from "react"

export default function FormLogin() {

  const router = useRouter()

  const [loading, setLoading] = useState(false)
  const [formValues, setFormValues] = useState({ 
    email: "",
    password: "",
  })
  const [error, setError] = useState("")

  const searchParams = useSearchParams()
  const callbackUrl = searchParams?.get("callbackUrl") || "/"

  const onSubmit = async (e: React.FormEvent) => {

    e.preventDefault()
    
    try {
      setLoading(true)
      setFormValues({ email: "", password: "" })

      const res = await signIn("credentials", {
        redirect: false,
        email: formValues.email,
        password: formValues.password,
        callbackUrl,
      })

      setLoading(false)

      // console.log(res)
      if (!res?.error) {
        // console.log('res: ', res)
        router.push(callbackUrl)
      } else {
        setError("Invalid email or password")
      }
    } catch (error: unknown) {
      setLoading(false)
      
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
      
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value })
  }

  return (
    <form onSubmit={onSubmit}>
      {error && (
        <p className="text-center bg-red-300 py-3 mb-5">{error}</p>
      )}
      <div className="mb-5">
        <input
          required
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          placeholder="Email address"
          className={`input`}
        />
      </div>
      <div className="mb-5">
        <input
          required
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
          placeholder="Password"
          className={`input`}
        />
      </div>
      <div>
        <button
          type="submit"
          className="button button--default button--md w-full"
          disabled={loading}
        >
          {loading ? "loading..." : "Login"}
        </button>
      </div>
      
    </form>
  )
}
"use client"

import { useCart } from "@/store/useCart"
import Link from "next/link"

export default function CartDetails() {

  const { cart } = useCart()

  return (
    <section className="cart">
      <div className="">

        <div className="flex flex-col gap-5">

          <div>
            <h1 className="h2">Cart</h1>
          </div>

          <div>
            { cart.length > 0 ?
              <ul>
                {cart.map((item) => (
                  <li key={item.id}>
                    <div>
                      <h2>{item.name}</h2>
                      <p>{item.price}</p>
                    </div>
                  </li>
                ))}
              </ul> :
              <div className="wysiwyg">
                <p>Your cart is currently empty.</p>
                <p><Link href="/services" className="px-2 py-1 leading-none bg-primary rounded-md text-white whitespace-nowrap">Click here to view our services</Link></p>
              </div>
        }
          </div>

        </div>
        
      </div>
    </section>
  )
}
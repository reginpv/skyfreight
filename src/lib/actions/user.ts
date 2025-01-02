"use server"

import prisma from "@/lib/prisma"
import { hash } from "bcrypt"
import { revalidatePath } from "next/cache"
import { getServerSession, Session } from "next-auth"
import { authOptions } from "@/lib/authOptions"
import { isValidEmail } from "@/lib/helper"
import { SUPERADMINS } from "@/config/constants"

// UPDATE
export async function updateUser(formData: FormData) { 

  const session = await getServerSession(authOptions) as Session | null

  const name = formData.get("name")?.toString().trim()
  const email = formData.get("email")?.toString().trim()
  const password = formData.get("password")?.toString().trim()
  const passwordConfirm = formData.get("passwordConfirm")?.toString().trim()
  const security = formData.get("security")?.toString().trim()

  const errors: string[] = []

  try {

    // Check if this is a security update
    if(security) {

      // Server-Side Validation
      if (!password) errors.push("Password is required.")
      if (password && password.length < 4) errors.push("Password must be at least 4 characters long.")
      if (!passwordConfirm) errors.push("Password confirmation is required.")
      if (password && passwordConfirm && password !== passwordConfirm) errors.push("Passwords do not match.")
    
      if (errors.length > 0) {
        return { 
          success: false, 
          errors 
        }
      }

      const user = await prisma.user.update({
        where: {
          id: +session.user.id
        },
        data: {
          password: await hash(password, 12),
          updatedAt: new Date().toISOString(),
        },
      })

      revalidatePath(`/user/setting/security`)

      return { 
        success: true, 
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        }
      }

    } else {

      // Server-Side Validation
      if(!session.user.id) errors.push("User ID is required.")
      if(!name) errors.push("Name is required.")
      if(!email) errors.push("Email are required.")
      if(!isValidEmail(email)) errors.push("Email not valid.")
    
    
      if (errors.length > 0) {
        return { 
          success: false, 
          errors 
        }
      }

      const user = await prisma.user.update({
        where: {
          id: +session.user.id
        },
        data: {
          name: name,
          email: email,
          updatedAt: new Date().toISOString(),
        },
      })

      revalidatePath(`/user/setting/account`)
      revalidatePath(`/user/setting/profile`)

      return { 
        success: true, 
        user: {
          id: user.id,
          name: user.name,
          email: user.email
        }
      }

    }

  } catch (error) { 

    console.log('Error: ', error.message)
    errors.push(`An unknown error occurred, please refresh the page.`)
    return { success: false, errors }

  }
}

// DELETE
export async function deleteUser() {

  const session = await getServerSession(authOptions) as Session | null 
  const userId = session.user.id

  const errors: string[] = []

  // Protected accounts
  if(SUPERADMINS.includes(session.user.email)) errors.push("Can't delete a superadmin account.")

  // Server-Side Validation
  if (!userId) errors.push("You do not have authorization to delete this account.")

  if (errors.length > 0) {
    return { 
      success: false, 
      errors 
    }
  }

  try {

    const user = await prisma.user.delete({
      where: {
        id: +userId,
      },
    })

    return { 
      success: true, 
      user
    }

  } catch (error) { 

    return { 
      success: false, 
      errors: [`An unknown error occurred: ${error.message}`]
    }

  }

}
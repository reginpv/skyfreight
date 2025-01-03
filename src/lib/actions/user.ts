"use server"

import prisma from "@/lib/prisma"
import { hash } from "bcrypt"

import { SUPERADMINS } from "@/config/constants"
import { isValidEmail } from "@/lib/helper"

// GET
export async function getUsers(limit?: number) {

	try {
    
    const users = await prisma.user.findMany({
      where: { 
        role: {
          notIn: ['8', '9'],
        }
      },
      select: {
        id: true,
        name: true,
        email: true,
        _count: {
          select: {
            orders: true,
          },
        },
      },
      ...(limit ? { take: limit } : {})
    })

		return {
      success: true,
      users: users
    }

	} catch (error) {

		return { 
      success: false,
      errors: error 
    }

	}
}

// CREATE
export async function createUser(data: any) {

  const name = data.get("name")?.toString().trim()
  const email = data.get("email")?.toString().trim()
  const password = data.get("password")?.toString().trim()
  const role = data.get("role")?.toString().trim()
  const errors: string[] = []

  // Server-Side Validation
  if (!name) errors.push("Name is required.")
  if (!email) errors.push("Email is required.")
  //if (!role) errors.push("Role is required.")
  if (!password) errors.push("Password is required.")
  if (password && password.length < 4) errors.push("Password must be at least 4 characters long.")
  if (email && !isValidEmail(email)) errors.push("Email is invalid.")

  try {

    // Check if email already exists
    const userExist = await prisma.user.findFirst({
      where: {
        email: email,
      },
    })
    if (userExist) errors.push("Email already exists.")

    if (errors.length > 0) {
      return { 
        success: false, 
        payload: errors 
      }
    }

    // Proceed to create user
    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: await hash(password, 12),
        role: role
      },
    })

    return { 
      success: true, 
      payload: user
    }

  } catch (error) {

    return { 
      success: false, 
      payload: [`An unknown error occurred: ${error.message}`]
    }

  }

}

// DELETE
export async function deleteUser(id: number) {

  const errors: string[] = []

  // Get user 
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  })

  // Protected accounts
  if(SUPERADMINS.includes(user.email)) errors.push("Can't delete a superadmin account.")

  // Server-Side Validation
  if (!id) errors.push("You do not have authorization to delete this account.")

  if (errors.length > 0) {
    return { 
      success: false, 
      payload: errors 
    }
  }

  try {

    const user = await prisma.user.delete({
      where: {
        id: id,
      },
    })

    return { 
      success: true, 
      payload: user
    }

  } catch (error) { 

    return { 
      success: false, 
      payload: [`An unknown error occurred: ${error.message}`]
    }

  }

}
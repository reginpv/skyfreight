import { NextRequest, NextResponse } from "next/server"
import { hash } from "bcrypt"
import prisma from "@/lib/prisma"

const tableName = "user"

// GET
export async function GET(req: NextRequest) {

  // Sample with search params
	//const id = req.nextUrl.searchParams.get("id");

	try {
    
    const users = await prisma[tableName].findMany()

		return NextResponse.json(users, { status: 200 })

	} catch (error) {

		return NextResponse.json({ message: "Error", error }, { status: 500 });

	}
}

// POST
export async function POST(req: NextRequest) {

  const body = await req.json()
  const { name, email, password } = body

	try {

    const isExist = await prisma[tableName].findUnique({
      where: {
        email
      }
    })

    if(!isExist) {
		
      const user = await prisma[tableName].create({
        data: {
          name,
          email,
          password: await hash(password, 12),
          role: '1'
        },
      })

      return NextResponse.json(user, { status: 201 })

    } else {

      return NextResponse.json({
        error: true,
        message: `Email ${email} already exist.`
      }, { status: 200 })

    }

	} catch (error) {

		return NextResponse.json({ message: "Error", error }, { status: 500 });

	}
}

// DELETE
export async function DELETE(req: NextRequest) {

  const body = await req.json()
  const { id } = body

  try {

    // console.log(id)

    // Delete sub qrcode 
    if(id){

      // console.log(id)
      
      // Delete all parent qrcode

      // console.log('deleted qr: ', deletedQr)

      // Delete all pass reset tokens
      // const deletedPassToken = await prisma.passwordResetToken.deleteMany({
      //   where: {
      //     userId: +id
      //   }
      // })
      // console.log('deleted tokens: ', deletedPassToken)
      
      const deletedUser = await prisma[tableName].delete({
        where: {
          id
        }
      })
      // console.log('deleted user: ', deletedUser)

      return NextResponse.json({deletedUser})

    } else {

      return NextResponse.json({ message: "No Qr type has been passed"}, { status: 500 });

    }
    

  } catch(error) {

    // console.log('ERROR DEL: ',error)
    return NextResponse.json({ message: "Error", error}, { status: 500 });

  }

  
}
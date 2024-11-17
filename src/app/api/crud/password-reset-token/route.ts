import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { generateUUID } from '@/lib/helper'

const tableName = 'passwordResetToken'

// POST
export async function POST(req: NextRequest) {

  const body = await req.json()
  const { email } = body

	try {

    const user = await prisma.user.findUnique({
      where: {
        email
      }
    })

    if(user) {
		
      const passwordResetToken = await prisma[tableName].create({
        data: {
          userId: user.id,
          token: `${generateUUID()}${generateUUID()}`.replace(/-/g, '')
        },
      })

      return NextResponse.json(passwordResetToken, { status: 201 })

    } else {

      return NextResponse.json({
        error: true,
        message: `Skipping, user not found`
      }, { status: 200 })

    }

	} catch (error) {

		return NextResponse.json({ message: "Error", error }, { status: 500 });

	}
}
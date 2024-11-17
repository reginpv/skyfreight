import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

const tableName = 'passwordResetToken'

// PUT
export async function PUT(req: NextRequest, { params }: { params: {token: string}}) {

  const body = await req.json()
  const { token } = params

	try {

    const res = await prisma[tableName].update({
      where: {
        token
      },
      data: {
        resetAt: new Date().toISOString(),
      },
    })

    if(res.id) {
      return NextResponse.json(res, { status: 201 })
    } else {
      return NextResponse.json({ message: "Error", info: "Failed updating database"}, { status: 500 });
    }


	} catch (error) {

		return NextResponse.json({ message: "Error token", error }, { status: 500 })

	}
}
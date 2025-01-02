import prisma from "@/lib/prisma"

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
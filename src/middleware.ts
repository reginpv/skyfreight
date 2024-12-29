export { default } from "next-auth/middleware"
import { NextResponse, NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"
import { isAdmin } from "@/lib/helper"

export async function middleware(req: NextRequest) {
  
  const token:any = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
  const { pathname } = req.nextUrl

  // Check for restricted paths
  if (pathname.startsWith('/admin') || pathname.startsWith('/user')) {

    // Ensure the user has a valid token
    if (!token) {
      return NextResponse.redirect(new URL('/login', req.url))
    }

    // Restrict access to admin routes for non-superadmin users
    if (pathname.startsWith('/admin') && !isAdmin(token.role)) {
      return NextResponse.redirect(new URL('/login', req.url))
    }

  }

  // Allow access to other routes
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/user/:path*',
    '/app/:path*' // Add api routes here?
  ],
}
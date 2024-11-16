export { default } from 'next-auth/middleware'
import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'
import { isAdmin } from '@/lib/helper'

export async function middleware(req:any) {
  const token:any = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

  const { pathname } = req.nextUrl

  // Check for restricted paths
  if (pathname.startsWith('/admin') || pathname.startsWith('/account') || pathname.startsWith('/app')) {
    // Ensure the user has a valid token
    if (!token) {
      return NextResponse.redirect(new URL('/login', req.url))
    }

    // Restrict access to admin routes for non-admin users
    if (pathname.startsWith('/admin') && !isAdmin(+token.id)) {
      return NextResponse.redirect(new URL('/login', req.url))
    }
  }

  // Allow access to other routes
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/account/:path*',
    '/app/:path*' // Add api routes here?
  ],
}
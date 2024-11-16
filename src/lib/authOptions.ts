import { compare } from "bcrypt"
import { headers } from "next/headers"
import nodemailer from "nodemailer"
import { emailTemplateWelcome } from "@/lib/email-templates/welcome"
import { type NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import prisma from "@/lib/prisma"
import { PUBLIC_SITENAME } from "@/config/constants"
import SMTPTransport from "nodemailer/lib/smtp-transport"

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      name: 'Sign in',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'hello@example.com'
        },
        password: { 
          label: 'Password', 
          type: 'password' 
        }
      },
      async authorize(credentials):Promise<any> {
        if(!credentials?.email || !credentials.password) {
          return null
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        })

        if(!user) {
          return null
        }

        const isPasswordValid = await compare(
          credentials.password,
          user.password+''
        )
        
        if(!isPasswordValid){
          return null
        }

        const header = headers()
        const ip = (header.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0]
        await prisma.user.update({
          where: {
            email: credentials.email,
          },
          data: {
            ipaddress: ip,
            loggedInAt: new Date().toISOString()
          }
        })

        return {
          id: user.id,
          name: user.name,
          email: user.email
        }
        
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }){
      if (account?.provider === 'google') {
        const dbUser = await prisma.user.findUnique({
          where: { email: profile?.email },
        })

        if (!dbUser) {
          // Create a new user if they don't exist
          const header = headers()
          const ip = (header.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0]
          const newUser = await prisma.user.create({
            data: {
              name: profile?.name as string,
              email: profile?.email as string,
              ipaddress: ip,
              loggedInAt: new Date().toISOString()
              // Add any other necessary fields
            }
          })
          user.id = newUser.id.toString()

          // Welcome email
          // We are not using hooks here
          if(newUser) {

            const { email, name } = newUser
            // const data = {email, name }

            // Start
            try {

              const transporter = nodemailer.createTransport({
                host: process.env.SMTP_BREVO_HOST!,
                port: parseInt(process.env.SMTP_BREVO_PORT!, 10),
                secure: false,
                auth: {
                  user: process.env.SMTP_BREVO_LOGIN!,
                  pass: process.env.SMTP_BREVO_KEY!,
                },
              } as SMTPTransport.Options);
              
          
              try {
          
                const emailRes = await transporter.sendMail({
                  from: 'reginpv@gmail.com',
                  to: email,
                  bcc: 'reginpv@yahoo.com',
                  subject: `Hello ${name}, welcome to ${PUBLIC_SITENAME}!`,
                  html: emailTemplateWelcome({
                    name,
                    email
                  })
                })
          
                //console.log(emailRes)
                if(emailRes.accepted.length > 0) {
                  // Success
                } else {
                  // failed
                }
          
              } catch(err) {
                console.log(err) 
              }
          
            } catch (err) {
              console.log(err) 
            }

          }
          
        } else {

          user.id = dbUser.id.toString()
          user.name = dbUser.name
        }
        
      }
      return true
    },
    async jwt({ token, user, trigger, session }){

      // See profile form handle for sample usage
      if (trigger === 'update' && session?.name && session?.email) {
        token.name = session.name
        token.email = session.email
      }

      if (user) {
        token.id = +user.id
      }
      return token
    },
    async session({ session, token }){
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id
        },
      }
    }
  },
  secret: process.env.NEXTAUTH_SECRET
}
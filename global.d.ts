import "next-auth"
import { DefaultJWT } from "next-auth/jwt"

declare global {

  type User = {
    id: number,
    name?: stringnumber,
    email?: stringnumber,
    image?: stringnumber,
    role?: stringnumber
  }

  interface Props {
    children?: React.ReactNode;
    className?: string;
  }

}

declare module "next-auth" {
  interface Session {
    user: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id: string;
    role: string;
    iat: number;
    exp: number;
    jti: string;
  }
}
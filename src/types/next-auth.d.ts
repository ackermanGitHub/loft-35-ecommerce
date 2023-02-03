import NextAuth, { DefaultSession } from 'next-auth';
import { JWT, DefaultJWT } from 'next-auth/jwt';

declare module 'next-auth/jwt' {
  interface JWT {}
}

declare module 'next-auth' {
  interface Session {
    user: XUser & DefaultSession['user'];
  }
}

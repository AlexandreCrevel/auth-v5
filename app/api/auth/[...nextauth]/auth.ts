import type { NextAuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: NextAuthOptions = {
    debug: true,
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
      ],
      callbacks: {
        async signIn({
            user, account, profile, email, credentials
        }) {
            return true
        },
        async redirect({ url, baseUrl}) {
            return baseUrl + '/dashboard';
        }
      }
};
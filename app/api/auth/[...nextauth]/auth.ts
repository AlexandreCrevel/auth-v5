import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
    debug: true,
    secret: process.env.NEXTAUTH_SECRET,
providers: [],
};
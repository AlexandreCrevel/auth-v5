import Credentials from 'next-auth/providers/credentials';
import Google from 'next-auth/providers/google';

import bcrypt from 'bcryptjs';
import type { NextAuthConfig } from 'next-auth';
import { getUserByEmail } from './data/user';
import { LoginSchema } from './schemas';

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validateFiels = LoginSchema.safeParse(credentials);

        if (validateFiels.success) {
          const { email, password } = validateFiels.data;

          const user = await getUserByEmail(email);
          if (!user || !user.password) {
            return null;
          }

          const passwordMatch = await bcrypt.compare(password, user.password);
          if (passwordMatch) {
            return user;
          }
        }
        return null;
      },
    }),
    Google,
  ],
} satisfies NextAuthConfig;

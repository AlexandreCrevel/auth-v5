'use server';
import { signIn } from '@/auth';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { LoginSchema, LoginSchemaType } from '@/schemas';
import { AuthError } from 'next-auth';

export const login = async (values: LoginSchemaType) => {
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) {
    return {
      error: 'Invalid fields',
    };
  }

  const { email, password } = validatedFields.data;

  try {
    const response = await signIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });

    return response;
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin': {
          return {
            error: 'Invalid credentials',
          };
        }
        default: {
          return {
            error: 'An error occurred',
          };
        }
      }
    }
    throw error;
  }
};

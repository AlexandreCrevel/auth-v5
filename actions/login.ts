'use server';
import { LoginSchema, LoginSchemaType } from '@/schemas';

export const login = async (values: LoginSchemaType) => {
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) {
    return {
      error: 'Invalid fields',
    };
  }

  return {
    success: 'Email sent',
  };
};

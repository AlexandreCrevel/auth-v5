'use server';
import { RegisterSchema, RegisterSchemaType } from '@/schemas';

export const register = async (values: RegisterSchemaType) => {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return {
      error: 'Invalid fields',
    };
  }

  return {
    success: 'Email sent',
  };
};

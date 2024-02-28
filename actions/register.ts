'use server';
import { getUserByEmail } from '@/data/user';
import { db } from '@/lib/prisma';
import { RegisterSchema, RegisterSchemaType } from '@/schemas';
import bcrypt from 'bcrypt';

export const register = async (values: RegisterSchemaType) => {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return {
      error: 'Invalid fields',
    };
  }

  const { email, password, name } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return {
      error: 'Email already in use',
    };
  }

  await db.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
    },
  });

  //TODO Send verification token email

  return {
    success: 'Email sent',
  };
};

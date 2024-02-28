// import { PrismaClient } from '@prisma/client'

// const prismaClientSingleton = () => {
//   return new PrismaClient()
// }

// type prismaClientSingleton = ReturnType<typeof prismaClientSingleton>

// const globalForPrisma = globalThis as unknown as {
//     prisma: undefined | prismaClientSingleton
//     };

// const prisma = globalForPrisma.prisma ?? prismaClientSingleton()

// export default prisma

// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalThis.prisma = db;

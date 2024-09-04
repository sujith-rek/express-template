import { PrismaClient } from '@prisma/client';

// @ts-ignore
interface PrismaGlobal extends Express.Global {
    prisma: PrismaClient;
}

declare const global: PrismaGlobal;

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === 'development') {
    global.prisma = prisma;
}

export default prisma;
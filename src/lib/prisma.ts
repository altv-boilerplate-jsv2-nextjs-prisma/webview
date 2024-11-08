import {PrismaClient} from "@/../../prisma/client-webview";

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined
}

const prismaClient = globalForPrisma.prisma ?? new PrismaClient();

export default prismaClient;

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prismaClient;

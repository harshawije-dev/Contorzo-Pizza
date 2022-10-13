import { PrismaClient } from '@prisma/client'
const $prisma = new PrismaClient();

export const GetListAsync = async () => {
    const data = await $prisma.customers.findMany();
    return data;
}
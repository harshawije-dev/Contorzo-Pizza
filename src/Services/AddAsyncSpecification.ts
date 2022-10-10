import { PrismaClient } from '@prisma/client'
const $prisma = new PrismaClient()

export const AddAsync = async (data: any) => {
    const saveData = await $prisma.customers.create(data);
    return saveData;
}

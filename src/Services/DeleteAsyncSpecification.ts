import { PrismaClient } from '@prisma/client'
const $prisma = new PrismaClient()

export const DeleteAsync = async (id: string) => {
    const deleteRecord = $prisma.customers.delete({
        where: {
            Id: id
        }
    });
    return deleteRecord;
}
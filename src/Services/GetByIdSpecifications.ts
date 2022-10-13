import { PrismaClient } from '@prisma/client'
const $prisma = new PrismaClient()

const GetByIdAsync = async (id: string) => {
    const record = await $prisma.customers.findUnique({
        where: {
            Id: id
        }
    });
    return record;
}

export default GetByIdAsync;
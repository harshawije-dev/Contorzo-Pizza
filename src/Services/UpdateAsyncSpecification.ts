import { PrismaClient } from '@prisma/client'
const $prisma = new PrismaClient();

const UpdateAsync = async (guid: string, data: any) => {
    const updateData = await $prisma.customers.update({
        where: {
            Id: guid
        },
        data: data
    });
    return updateData;
};

export default UpdateAsync;
import { PrismaClient } from '@prisma/client';
const $prisma = new PrismaClient();
const UpdateAsync = async (guid, data) => {
    const updateData = await $prisma.customers.update({
        where: {
            Id: guid
        },
        data: data
    });
    return updateData;
};
export default UpdateAsync;
//# sourceMappingURL=UpdateAsyncSpecification.js.map
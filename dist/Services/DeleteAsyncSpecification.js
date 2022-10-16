import { PrismaClient } from '@prisma/client';
const $prisma = new PrismaClient();
export const DeleteAsync = async (id) => {
    const deleteRecord = $prisma.customers.delete({
        where: {
            Id: id
        }
    });
    return deleteRecord;
};
//# sourceMappingURL=DeleteAsyncSpecification.js.map
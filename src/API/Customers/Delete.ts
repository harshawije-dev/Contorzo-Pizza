import express, { Request, Response } from "express";
import { DeleteAsync } from "../../Services/DeleteAsyncSpecification.js";

const router = express.Router();

const deleteCustomer = router.delete('/:Id', (req: Request, res: Response) => {
    const customerId: string = req.params.Id;
    if (customerId != null) {
        DeleteAsync(customerId).catch(e => res.send(`Error Deleteing record ${e}`))
            .finally(async () => {
                await res.send("Record Deleted Successfully");
            })
    }
});

export default deleteCustomer;
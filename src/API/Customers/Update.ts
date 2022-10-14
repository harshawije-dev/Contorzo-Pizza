import { Customers } from "@prisma/client";
import express, { Request, Response } from "express";
import formidable from "express-formidable";
import UpdateAsync from "../../Services/UpdateAsyncSpecification.js";

const router = express.Router();
router.use(formidable());

export const updateCustomer = router.put('/:Id', (req: Request, res: Response) => {
    const id: string = req.params.Id;
    const body: any = req.fields;
    UpdateAsync(id, body).then(x => { res.send(x) });
})
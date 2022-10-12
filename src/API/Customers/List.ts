import express, { Request, Response } from "express";
import { GetListAsync } from "../../Services/GetListAsyncSpecification.js";
const router = express.Router();

export const getCustomerList = router.get('/', (req: Request, res: Response) => {
    GetListAsync().then(x => res.send(x));
    //cleconsole.log(customerList);
    //res.send(customerList);
})
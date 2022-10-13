import express, { Request, Response } from "express";
import GetByIdAsync from "../../Services/GetByIdSpecifications.js";
const router = express.Router();

export const getCustomer = router.get('/:Id', (req: Request, res: Response) => {
    const id: string = req.params.Id;
    GetByIdAsync(id).then((x)=> {res.send(x)});
})
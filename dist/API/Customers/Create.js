import express from "express";
import { AddAsync } from "../../Services/AddAsyncSpecification.js";
const router = express.Router();
const DataModel = (values) => {
    const newDataModel = new Object();
    Object.assign(newDataModel, { data: values });
    return newDataModel;
};
export const createCustomer = router.post('/', (req, res) => {
    const data = DataModel(req.body);
    const newCustomer = AddAsync(data);
    if (newCustomer != null) {
        res.send({
            customer: data,
            message: "Record Saved Successfully"
        });
    }
    newCustomer.catch(e => console.log(e));
    //console.log(newCustomer);
});
//# sourceMappingURL=Create.js.map
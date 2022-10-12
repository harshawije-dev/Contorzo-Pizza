import express from "express";
import { GetListAsync } from "../../Services/GetListAsyncSpecification.js";
const router = express.Router();
export const getCustomerList = router.get('/', (req, res) => {
    GetListAsync().then(x => res.send(x));
    //cleconsole.log(customerList);
    //res.send(customerList);
});
//# sourceMappingURL=List.js.map
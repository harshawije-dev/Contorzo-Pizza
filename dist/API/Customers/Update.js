import express from "express";
import formidable from "express-formidable";
import UpdateAsync from "../../Services/UpdateAsyncSpecification.js";
const router = express.Router();
router.use(formidable());
export const updateCustomer = router.put('/:Id', (req, res) => {
    const customerId = req.params.Id;
    const body = req.fields;
    UpdateAsync(customerId, body).then(x => { res.send(x); });
});
//# sourceMappingURL=Update.js.map
import express from "express";
import GetByIdAsync from "../../Services/GetByIdSpecifications.js";
const router = express.Router();
export const getCustomer = router.get('/:Id', (req, res) => {
    const id = req.params.Id;
    GetByIdAsync(id).then((x) => { res.send(x); });
});
//# sourceMappingURL=Get.js.map
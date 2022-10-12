import express from "express";
import { createCustomer } from "./API/Customers/Create.js";
import bodyParser from "body-parser";
import { getCustomerList } from "./API/Customers/List.js";
const app = express();
const PORT = 5000;
// Prepare the Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
// Body Parser
app.use(bodyParser.json());
// Main Route
app.use("/api", (req, res) => {
    res.send("URL works");
});
app.use("/Customers", createCustomer);
app.use("/Customers", getCustomerList);
//# sourceMappingURL=Startup.js.map
import express, { Request, Response } from "express";
import { createCustomer } from "./API/Customers/Create.js";
import bodyParser from "body-parser";
import { getCustomerList } from "./API/Customers/List.js";
import { getCustomer } from "./API/Customers/Get.js";
import { updateCustomer } from "./API/Customers/Update.js";
import deleteCustomer from "./API/Customers/Delete.js";

const app = express();
const PORT = 5000;

// Prepare the Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
});

// Body Parser
app.use(bodyParser.json());


// Main Route
app.use("/api", (req: Request, res: Response) => {
    res.send("URL works");
});

// Customer Routes
app.use("/Customers", createCustomer)
app.use("/Customers", getCustomerList)
app.use("/Customers", getCustomer)
app.use("/Customers", updateCustomer)
app.use("/Customers", deleteCustomer)
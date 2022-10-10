import express, { Request, Response } from "express";
import { createCustomer } from "./API/Customers/Create.js";
import bodyParser from "body-parser";

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

app.use("/Customers", createCustomer)
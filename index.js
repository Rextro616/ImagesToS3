import express from "express";
import dotenv from "dotenv";
import { conectToDB } from "./src/config/db.js";'./src/config/db.js'

dotenv.config();

const app = express();

const PORT = process.env.PORT;

import productRouter from "./src/routes/product.route.js";

app.use(express.json());

app.use("/product", productRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

conectToDB();

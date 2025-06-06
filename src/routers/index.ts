const express = require("express");
const cors = require("cors");

import categoriesRouter from "./categoriesRouter";
import productsRouter from "./productsRouter";
import { IResponse } from "../interfaces/IResponse";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/products", productsRouter);
app.use("/api/categories", categoriesRouter);
app.use("/", (req: Request, res: IResponse<{ message: string }>) => {
  res.json({ message: "Hello World" });
})

app.listen(PORT, () => {
  console.log("App listening on port", PORT);
});

const express = require("express");
const cors = require("cors");

import categoriesRouter from "./categoriesRouter";
import productsRouter from "./productsRouter";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/products", productsRouter);
app.use("/api/categories", categoriesRouter);

app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});

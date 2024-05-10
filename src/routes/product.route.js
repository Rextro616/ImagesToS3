import express from "express";
import multer from "multer";
import fileUpload from "express-fileupload";

const upload = multer();

import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductsById,
} from "../controller/product.controller.js";

const productRouter = express.Router();

productRouter.post(
  "/",
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads",
  }),
  createProduct
);
productRouter.delete("/:id", deleteProduct);
productRouter.get("/", getAllProducts);
productRouter.get("/:id", getProductsById);

export default productRouter;

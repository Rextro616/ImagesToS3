import productModel from "../models/product.model.js";
import { uploadImage, deleteImage } from "../controller/cloudinary.controller.js";

const createProduct = async (req, res) => {
  try {
    const { name, category, description, price } = req.body;
    console.log("Params ", req.body);
    console.log("Body ",req.files.image.tempFilePath);

    const newImage = await uploadImage(req.files.image.tempFilePath);

    const product = new productModel({
      name,
      category,
      description,
      price,
      image_url: newImage.secure_url,
      image_id: newImage.public_id
    });

    const newProduct = await product.save();

    return res.status(200).json({
      message: "Producto creado",
      data: newProduct,
    });
  } catch (err) {
    res.status(500).json({
      message: "Ocurrio un error al crear producto",
      error: err.message,
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProduct = await productModel.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({
        message: "Producto no encontrado",
      });
    }

    await deleteImage(deleteProduct.image_url);

    return res.status(200).json({
      message: "Producto borrado",
      data: deletedProduct,
    });
  } catch (err) {
    res.status(500).json({
      message: "Ocurrio un error al borrar producto",
      error: err.message,
    });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.find();

    if (!products) {
      return res.status(404).json({
        message: "No existen productos",
      });
    }

    return res.status(200).json({
      message: "Productos encontrados",
      data: products,
    });
  } catch (err) {
    res.status(500).json({
      message: "Ocurrio un error al encontrar los productos",
      error: err.message,
    });
  }
};

const getProductsById = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await productModel.findById(id);

    if (!product) {
      return res.status(404).json({
        message: "No existe el producto",
      });
    }

    return res.status(200).json({
      message: "Producto encontrado",
      data: product,
    });
  } catch (err) {
    res.status(500).json({
      message: "Ocurrio un error al encontrar el producto",
      error: err.message,
    });
  }
};

export { createProduct, deleteProduct, getAllProducts, getProductsById };

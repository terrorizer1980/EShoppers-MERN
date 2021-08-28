import Product from "./../models/productModel.js";
import asyncHandler from "express-async-handler";

//  All Products ==> /api/products
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
});

// a single Product ==> /api/products/:id
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  } else {
    res.json(product);
  }
});

export { getProductById, getProducts };

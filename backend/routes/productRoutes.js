import express from "express";
import Product from "./../models/productModel.js";
import asyncHandler from "express-async-handler";
const router = express.Router();

//  All Products ==> /api/products
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find();
    res.status(200).json(products);
  })
);

// a single Product ==> /api/products/:id
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404);
      throw new Error("Product not found");
    } else {
      res.json(product);
    }
  })
);

export default router;

import asyncHandler from "express-async-handler"
import Product from "../models/product.model.js"

// @desc    Fetch all products
// @route    GET /api/products
// @access    public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  res.json(products)
})

// @desc    Fetch single product
// @route    GET /api/product/:id
// @access    public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error("Product Not found!")
  }
})

// @desc    Delete product
// @route   DELETE /api/product/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    await product.remove()
    res.json({ message: "Product removed" })
  } else {
    res.status(404)
    throw new Error("Product Not found!")
  }
})

export { getProducts, getProductById, deleteProduct }

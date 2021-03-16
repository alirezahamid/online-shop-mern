import express from "express"
const router = express.Router()
import {
  getProducts,
  getProductById,
  deleteProduct,
  updateProduct,
  createProduct,
} from "../controllers/product.controllers.js"
import { protect, admin } from "../middleware/auth.middleware.js"

// @desc    Fetch and Create products
// @route    GET & POST /api/products
// @access    public and Private/Admin
router.route("/").get(getProducts).post(protect, admin, createProduct)

// @desc    Fetch and Delete and Update single product
// @route    GET & DELETE & PUT /api/products/:id
// @access    public and Private/Admin
router
  .route("/:id")
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct)

export default router

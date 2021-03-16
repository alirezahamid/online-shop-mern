import express from "express"
const router = express.Router()
import {
  getProducts,
  getProductById,
  deleteProduct,
} from "../controllers/product.controllers.js"
import { protect, admin } from "../middleware/auth.middleware.js"

// @desc    Fetch all products
// @route    GET /api/products
// @access    public
router.route("/").get(getProducts)

// @desc    Fetch and Delete single product
// @route    GET & DELETE /api/products/:id
// @access    public and Private/Admin
router.route("/:id").get(getProductById).delete(protect, admin, deleteProduct)

export default router

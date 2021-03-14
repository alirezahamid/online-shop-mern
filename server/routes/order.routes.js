import express from "express"
const router = express.Router()
import {
  addOrderItems,
  getOrderById,
} from "../controllers/order.controllers.js"
import { protect } from "../middleware/auth.middleware.js"

// @desc    Create New order
// @route   GET /api/orders
// @access  Private
router.route("/").post(protect, addOrderItems)

// @desc    Get order by id
// @route    GET /api/orders/:id
// @access    Private
router.route("/:id").get(protect, getOrderById)

export default router

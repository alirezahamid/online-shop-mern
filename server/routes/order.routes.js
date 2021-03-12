import express from "express"
const router = express.Router()
import { addOrderItems } from "../controllers/order.controllers.js"
import { protect } from "../middleware/auth.middleware"

// @desc    Create New order
// @route   GET /api/orders
// @access  Private
router.route("/").post(protect, addOrderItems)

export default router

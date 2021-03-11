import express from "express"
const router = express.Router()
import { authUser, getUserProfile } from "../controllers/user.controllers.js"
import { protect } from "../middleware/auth.middleware.js"

// @desc    Auth user & get token
// @route   GET /api/users/login
// @access  Public
router.post("/login", authUser)

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
router.route("/profile").get(protect, getUserProfile)

export default router

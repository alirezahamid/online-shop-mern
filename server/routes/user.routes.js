import express from "express"
const router = express.Router()
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUsers,
} from "../controllers/user.controllers.js"
import { protect, admin } from "../middleware/auth.middleware.js"

// @desc    Register a new user
// @route   GET /api/users
// @access  Public
router.route("/").post(registerUser).get(protect, admin, getUsers)

// @desc    Auth user & get token
// @route   GET /api/users/login
// @access  Public
router.post("/login", authUser)

// @desc    Get and Update user profile
// @route   GET & PUT /api/users/profile
// @access  Private
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
router.route("/:id").delete(protect, admin, deleteUsers)

export default router

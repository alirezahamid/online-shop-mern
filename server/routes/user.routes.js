import express from "express"
const router = express.Router()
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUsers,
  getUserById,
  updateUser,
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

router
  .route("/:id")
  .delete(protect, admin, deleteUsers) // @desc Delete user /@route   DELETE /api/users/:id / @access  Private/Admin
  .get(protect, admin, getUserById) // @desc Get user by id / @route   GET /api/users/:id / @access  Private/Admin
  .put(protect, admin, updateUser) // @desc Update user / @route   PUT /api/users/:id / @access  Private/Admin

export default router

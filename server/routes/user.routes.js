import express from "express"
const router = express.Router()
import { authUser } from "../controllers/user.controllers.js"

// @desc    Fetch all products
// @route    GET /api/products
// @access    public
router.post("/login", authUser)

export default router

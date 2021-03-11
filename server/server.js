import express from "express"
import dotenv from "dotenv"
import colors from "colors"
import { notFound, errorHandler } from "./middleware/error.middleware.js"
import connectDB from "./config/db.js"

import productRoutes from "./routes/products.routes.js"
import userRoutes from "./routes/user.routes.js"

const app = express()
dotenv.config()
connectDB()
app.use(express.json())
app.get("/", (req, res) => {
  res.send("API is running...")
})

app.use("/api/products", productRoutes)
app.use("/api/users", userRoutes)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)

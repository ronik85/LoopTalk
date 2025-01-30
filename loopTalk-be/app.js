import express from 'express'
import { connectDB } from './utils/features.js'
import dotenv from 'dotenv'

dotenv.config({
    path: './.env'
})
const mongoURI = process.env.MONGO_URI
const PORT = process.env.PORT || 3000
connectDB(mongoURI)

const app = express()


import userRouter from './routes/user.routes.js'
app.use('/new', userRouter)

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})
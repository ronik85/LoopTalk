import express, { json } from 'express'
import { connectDB } from './utils/features.js'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

dotenv.config({
    path: './.env'
})

const mongoURI = process.env.MONGO_URI
const PORT = process.env.PORT || 3000
connectDB(mongoURI)

const app = express()
app.use(express.json())
app.use(cookieParser())


import userRouter from './routes/user.routes.js'
import { errorMiddleware } from './middlewares/error.js'

app.use('/api/v1/user', userRouter)

app.use(errorMiddleware)

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})
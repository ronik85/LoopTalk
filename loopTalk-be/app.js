import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import express from 'express'
import { errorMiddleware } from './middlewares/error.js'
import { connectDB } from './utils/features.js'

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
import chatRouter from './routes/chats.routes.js'
import { createUser } from './seeders/user.js'

app.use('/api/v1/user', userRouter)
app.use('/api/v1/chat', chatRouter)

app.use(errorMiddleware)
// createUser(10)
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})
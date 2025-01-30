import { Router } from "express";
import { newUser } from "../controllers/user.controller.js";
import { singleAvatar } from '../middlewares/multer.js'

const router = Router()

router.post('/user', singleAvatar, newUser)

export default router
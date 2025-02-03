import { Router } from "express";
import { login, newUser } from "../controllers/user.controller.js";
import { singleAvatar } from '../middlewares/multer.js'

const router = Router()

router.post('/user', singleAvatar, newUser)
router.post('/login', login)

export default router
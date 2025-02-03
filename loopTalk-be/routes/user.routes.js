import { Router } from "express";
import { getMyProfile, login, logout, newUser } from "../controllers/user.controller.js";
import { singleAvatar } from '../middlewares/multer.js'
import { isAuthenticated } from "../middlewares/auth.js";

const router = Router()

router.post('/new', singleAvatar, newUser)
router.post('/login', login)


// After here user must be logged in to access the routes
router.use(isAuthenticated);
router.get("/me", getMyProfile);
router.get("/logout", logout);
router.get("/search", logout);


export default router
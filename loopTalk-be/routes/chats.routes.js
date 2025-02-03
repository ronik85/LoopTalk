import { Router } from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { getMyChats, newGroupChat } from "../controllers/chat.controller.js";

const router = Router()

// After here user must be logged in to access the routes
router.use(isAuthenticated);
router.post("/new", newGroupChat);
router.post("/my", getMyChats);

export default router
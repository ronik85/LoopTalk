import { Router } from "express";
import { newUser } from "../controllers/user.controller.js";

const route = Router()
route.post('/user', newUser)

export default route
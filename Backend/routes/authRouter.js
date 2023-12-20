import { Router } from "express";
import { allUsers, loginUser, registerUser } from "../controllers/authController.js";
import { isAdmin, requireSignin } from "../middlewares/authMiddleware.js";

const router = Router()

router.post('/signup', registerUser)

router.get('/allUsers',requireSignin, isAdmin, allUsers) 

router.post('/signin', loginUser)

export default router
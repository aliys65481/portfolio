import { Router } from "express";
import { loginController,signupController } from "./auth.controller";
import { validationMiddleware } from "../../middlewares";
import { createUserSchema } from "./auth.validation";


const authRouter = Router()
authRouter.post("/signup",validationMiddleware(createUserSchema),signupController)
authRouter.post("/login",loginController)

export default authRouter
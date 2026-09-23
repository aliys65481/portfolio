import { Request,Response,NextFunction } from "express"
import authService from "./auth.service";

const loginController = (req:Request,res:Response,next:NextFunction)=>{
    console.log("LOGIN :)");
    
    next()
}

const signupController = async (req:Request,res:Response,next:NextFunction)=>{
    console.log("SIGNUP :)");
    await authService.signup(req.body)
    return res.jsonResponse({},201,"user was created successfully")
}

export {
    loginController,
    signupController
    
}
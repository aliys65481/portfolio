import Joi from "joi";
import { IUser } from "./auth.dto";

export const createUserSchema = Joi.object<IUser>({
    email:Joi.string().email().required(),
    password:Joi.string().min(6).required(),
    profile:Joi.object({
        firstName:Joi.string().required(),
        lastName:Joi.string().required(),
        phone:Joi.string().length(12),
        birthDate:Joi.date()
    })

})
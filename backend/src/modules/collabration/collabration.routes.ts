import { Router } from "express";
import {createCollabrationController } from "./collabration.controller";
import { validationMiddleware } from "../../middlewares";
import { clbValidation } from "./collabration.validation";


const collabrationRouter = Router()
collabrationRouter.post('/',validationMiddleware(clbValidation),createCollabrationController)

export default collabrationRouter
import { Router } from "express";
import { createProject, getAllProjects } from "./projects.controller";
import { validationMiddleware } from "../../middlewares";
import { createProjectSchema } from "./projects.validation";

const projectRouter = Router();

projectRouter.get("/", getAllProjects);
projectRouter.post("/",validationMiddleware(createProjectSchema),createProject);

export default projectRouter

import type { Request, Response } from "express";
import { projectService } from "./projects.service";

const getAllProjects = async (req: Request, res: Response) => {
  console.log("getAllProjects");

  const projects = await projectService.find();
  return res.jsonResponse(
    {
      projects,
    },
    200,
  );
};

const createProject = async (req: Request, res: Response) => {
  console.log("create a post ");
  const createdProject = await projectService.create(req.body);
  return res.jsonResponse(
    createdProject,
    201,
  );
};

export { getAllProjects, createProject };

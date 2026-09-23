import { Request, Response, NextFunction } from "express";
import collabrationService from "./collabration.service";

const createCollabrationController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log("CLB :)");
  await collabrationService.create({
    ...req.body,
    ip: req.ip,
    agent: req.get("user-agent"),
  });
  return res.jsonResponse({}, 201, "clb was created successfully");
};

export { createCollabrationController };

import Joi from "joi";
import { IProject } from "./projects.dto";

export const createProjectSchema = Joi.object<IProject>({
  title: Joi.string().trim().min(1).max(64).required(),
  description: Joi.string().trim().min(1).max(500).required(),
  imageUrl: Joi.string().trim().min(1).max(255),
  tags: Joi.array().items(Joi.string().hex().length(24).required()),
  technologies: Joi.array().items(
    Joi.object({
      name: Joi.string().trim().required(),
      icon: Joi.string().required(),
    }),
  ).required(),
});

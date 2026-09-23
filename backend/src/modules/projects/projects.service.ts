import { toResponseProject } from "./project.mapper";
import { IProject } from "./projects.dto";
import projectsModel from "./projects.model";
import { projectRepository } from "./projects.repository";

class ProjectService {
  async find() {
    try {
      const allProjects = await projectRepository.find();
      return allProjects;
    } catch (err) {
      console.log(err);
      
      throw new Error(
        "Something went wrong while want to getting all projects",
      );
    }
  }
  async create(dto: IProject) {
    try {
        
      const existingProject = await projectRepository.findByTitle(dto.title);
        console.log(existingProject);
      if (existingProject) throw new Error(`${dto.title} has already existed.`);
      const createdProject = await projectRepository.create(dto);
    //   just for test to change shape of response data . 
      return toResponseProject(createdProject);
    } catch (err) {
      throw new Error(`Something went wrong while want to creating a projec ; ${err}`);
    }
  }
}

export const projectService = new ProjectService();

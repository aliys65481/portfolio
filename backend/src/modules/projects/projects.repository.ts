import { IProject } from "./projects.dto";
import projectsModel from "./projects.model";

class ProjectRepository {
    async find(){
        return await projectsModel.find({}).select("-_id").populate("tags", "-_id")
    }
    async findByTitle(title:string){
        return await projectsModel.findOne({title})
    }
    async create(dto:IProject){
        return await projectsModel.insertOne(dto)
    }
}

export const projectRepository = new ProjectRepository()
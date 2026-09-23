import { HydratedDocument } from "mongoose";
import { IProject } from "./projects.dto";


// this is sampel mapper funvrion
export const toResponseProject = (dto:IProject)=>{
    return{
        title:dto.title,
        description:dto.description
    }
}
import { createCollabrationDto } from "./collabration.dto";
import collabrationModel from "./collabration.model";
import { createCollabrationData } from "./collabration.types";

class CollabrationRepository {
    
    async create(dto:createCollabrationData){
        return await collabrationModel.insertOne(dto)
    }
}

export const collabrationRepository = new CollabrationRepository()
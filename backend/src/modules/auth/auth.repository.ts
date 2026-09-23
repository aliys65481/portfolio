import { IUser } from "./auth.dto";
import userModel from "./auth.model";

class UserRepository {
    async find(){
        return await userModel.find({})
    }
    async findByEmail(email:string){
        return await userModel.findOne({email})
    }
    async create(dto:IUser){
        return await userModel.insertOne(dto)
    }
}

export const userRepository = new UserRepository()
import { model, Model, Schema } from "mongoose";
import { IUser } from "./auth.dto";


interface IUserModel extends Model<IUser>{
}

const schema = new Schema<IUser>({
    email:{
        type:String,
        required:true,
        unique:true
        
    },
    password:{
        type:String,
        required:true,
        
    },
    profile:{
        type:{
            firstName:{
                type:String,
                
            },
            lastName:{
                type:String,
                
            },
            phone:{
                type:String,
                
            },
            birthDate:{
                type:Date
            }
        },
    }
})

export default model<IUser,IUserModel>("user",schema)
import { Model, model, Schema } from "mongoose";
export interface ICollabration {
    name:string,
    email:string,
    message:string,
    ip:string,
    agent:string
}
interface ICollabrationModel extends Model<ICollabration> {
    
}
const schema = new Schema<ICollabration>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  message: {
    type: String,
    required: true,
    trim: true,
    maxlength: 5000,
  },
  ip:{
    type:String,
    required:true
  },
  agent:{
    type:String,
  },
},{
    timestamps:true
});


export default model<ICollabration,ICollabrationModel>('collabration',schema)
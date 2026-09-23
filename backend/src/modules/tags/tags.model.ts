import { type Model, Schema,model } from "mongoose";

interface ITag{
    name:string
}
interface ITagModel extends Model<ITag>{

}
const schema = new Schema<ITag,ITagModel>({
    name:{
        type:String,
        required:true,
        trim:true
    }
})

export default model<ITag,ITagModel>('tag',schema)
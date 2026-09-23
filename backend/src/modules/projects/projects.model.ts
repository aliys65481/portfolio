import { type Model, Schema,model } from "mongoose";
import { IProject } from "./projects.dto";
import tagsModel from "../tags/tags.model";



const technologySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
  {
    _id: false,
  }
);


interface IProjectModel extends Model<IProject> {

}

const projectSchema = new Schema<IProject, IProjectModel>({
    title: {
        type: String,
        required: true,
        unique:true
    },
    url: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
    },
    tags:[{
        type: Schema.Types.ObjectId,
        ref: tagsModel.modelName,
    }],
    technologies: [{
        type: technologySchema,
        required: true,
    }],
    publishedAt: {
        type: Date,
    },
});

export default model<IProject,IProjectModel>("project", projectSchema);   
import { Schema } from "mongoose";

interface IProject {
    title: string;
    url: string;
    description: string;
    imageUrl?: string;
    tags: Schema.Types.ObjectId[];
    technologies: {
        name: string;
        icon: string;
    }[];
    publishedAt?: Date;
}

export{
    IProject
}
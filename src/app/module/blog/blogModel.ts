import { model, Schema } from "mongoose";
import { Tblog } from "./blogInterface";

const blogSchema = new Schema<Tblog>({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    }

})


export const Blog = model<Tblog>('blog', blogSchema)
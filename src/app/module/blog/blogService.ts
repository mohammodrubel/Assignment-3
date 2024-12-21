import httpStatus from "http-status";
import App__error from "../../Error/App__Error";
import { User } from "../user/userModel";
import { Tblog } from "./blogInterface";
import { Blog } from "./blogModel";

const createBlogService = async (payload:Tblog)=>{
    const isExistUser = await User.findById(payload.author)
        if(!isExistUser){
            throw new App__error(httpStatus.NOT_FOUND,'User not found. Please provide a valid user ID.')
        }
    const result = await Blog.create(payload)
    return result
}

const getAllBlogService = async ()=>{
    const result = await Blog.find({})
    return result
}
const updateBlogService = async (id:string,payload:Partial<Tblog>)=>{
    const isExistUser = await User.findById(payload.author)
    if(!isExistUser){
        throw new App__error(httpStatus.NOT_FOUND,'User not found. Please provide a valid user ID.')
    }
    const result = await Blog.findByIdAndUpdate(id,payload,{new:true})
    return result
}



export const blogService = {
    createBlogService,
    getAllBlogService,
    updateBlogService
}
import { Router } from "express";
import { blogController } from "./blogController";
import DataValidation from "../../Middleware/DataValidation";
import blogSchema from "./blogValidation";

const router = Router()

    router.post('/',DataValidation(blogSchema),blogController.createBlogController)
    router.get('/',blogController.getAllBlogController)
    router.patch('/:id',blogController.updateBlogController)
 


export const blogRouter =  router 
import { Router } from "express";
import { blogController } from "./blogController";
import DataValidation from "../../Middleware/DataValidation";
import blogSchema from "./blogValidation";
import auth from "../../Middleware/auth";
import { USER__ROLE } from "../user/usrRoleType";
import blogUpdateValidationSchema from "./blogUpdateValidation";

const router = Router()

router.post('/', DataValidation(blogSchema), blogController.createBlogController)
router.get('/',blogController.getAllBlogController)
router.patch('/:id', auth(USER__ROLE.user), DataValidation(blogUpdateValidationSchema), blogController.updateBlogController)
router.delete('/:id',auth(USER__ROLE.user),blogController.deleteBlogController)



export const blogRouter = router 
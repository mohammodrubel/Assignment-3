import { Router } from "express";
import { AdminController } from "./adminController";
import auth from "../../Middleware/auth";
import { USER__ROLE } from "../user/usrRoleType";

const router = Router()

    router.post('/users/:id/block',auth(USER__ROLE.admin),AdminController.blockUserController)
    router.delete('/blogs/:id',auth(USER__ROLE.admin),AdminController.deleteUserBlogController)

export const adminRouter = router 
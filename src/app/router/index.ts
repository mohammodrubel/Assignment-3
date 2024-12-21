import { Router } from "express";
import { blogRouter } from "../module/blog/blogRouer";
import { userRouter } from "../module/user/userRouter";
import { adminRouter } from "../module/admin/adminRouter";

const router = Router()

    const blogWebsiteRouter = [
        {
            path:'/admin',
            router:adminRouter,
        },
        {
            path:'/blogs',
            router:blogRouter,
        },
        {
            path:'/auth',
            router:userRouter,
        },
        
    ]

    blogWebsiteRouter.forEach(route => router.use(route.path,route.router))

export default router 
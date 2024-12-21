import { Router } from "express";
import { blogRouter } from "../module/blog/blogRouer";
import { userRouter } from "../module/user/userRouter";

const router = Router()

    const blogWebsiteRouter = [
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
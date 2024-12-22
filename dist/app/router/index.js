"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blogRouer_1 = require("../module/blog/blogRouer");
const userRouter_1 = require("../module/user/userRouter");
const adminRouter_1 = require("../module/admin/adminRouter");
const router = (0, express_1.Router)();
const blogWebsiteRouter = [
    {
        path: '/admin',
        router: adminRouter_1.adminRouter,
    },
    {
        path: '/blogs',
        router: blogRouer_1.blogRouter,
    },
    {
        path: '/auth',
        router: userRouter_1.userRouter,
    },
];
blogWebsiteRouter.forEach(route => router.use(route.path, route.router));
exports.default = router;

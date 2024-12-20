import { Router } from "express";
import DataValidation from "../../Middleware/DataValidation";
import usrValidation from "./userValidation";

const router = Router()

    router.post('/register',DataValidation(usrValidation))

export const userRouter = router
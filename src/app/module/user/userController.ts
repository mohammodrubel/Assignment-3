/* eslint-disable @typescript-eslint/no-unused-vars */
import CatchAsync from "../../utils/CatchAsync";
import SendResponse from "../../utils/SendResponce";
import { UserService } from "./userService";


const usersController = CatchAsync(async (req,res,_next)=>{
    const result = await UserService.createUserService(req.body)
    SendResponse(res,{
        statusCode:201,
        success:false,
        message:'new user create successfully',
        data:result
    })
})



export const userController = {
    usersController
}
import httpStatus from "http-status";
import CatchAsync from "../../utils/CatchAsync";
import sendResponce from "../../utils/SendResponce";
import { authService } from "./authService";
import config from "../../config";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const loginController = CatchAsync(async(req,res,next)=>{
    const result = await authService.loginService(req.body)
    const {accessToken,refreshToken} = result 
    res.cookie("refreshToken",refreshToken,{
        secure:config.node__env === 'production',
        httpOnly:true,

    })
    sendResponce(res,{
        statusCode:httpStatus.OK,
        success:true,
       "message": "Login successful",
        data:accessToken
    })
})



export const  AuthController = {
    loginController
}
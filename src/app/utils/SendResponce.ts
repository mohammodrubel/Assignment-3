import { Response } from "express"
type Tresponse<T> = {
    statusCode : number ,
    message:string,
    success:boolean,
    data:T
}


const SendResponse =<T> (res:Response,data:Tresponse<T>)=>{
    res.status(data.statusCode).json({
        statusCode:data.statusCode,
        success:true,
        message:data?.message,
        data:data
    })
}

export default SendResponse
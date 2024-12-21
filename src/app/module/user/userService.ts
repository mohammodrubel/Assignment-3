// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Tuser } from "./userInterface"
import { User } from "./userModel"

const createUserService = async(payload:Tuser)=>{
    const result = (await User.create(payload)).toObject()
  
    delete result.password
    delete result.role
    return result
}

export const UserService = {
    createUserService
}
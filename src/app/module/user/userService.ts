import { Tuser } from "./userInterface"
import { User } from "./userModel"

const createUserService = async(payload:Tuser)=>{
    const result = await User.create(payload)
    return result
}

export const UserService = {
    createUserService
}
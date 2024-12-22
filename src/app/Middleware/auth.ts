import httpStatus from "http-status"
import jwt, { JwtPayload } from 'jsonwebtoken'
import config from "../config"
import App__error from "../Error/App__Error"
import CatchAsync from "../utils/CatchAsync"
import { ROLE__TYPE } from "../module/user/usrRoleType"


const auth = (...requiredRole : ROLE__TYPE[])=>{
    return CatchAsync(async (req, res, next) => {
        const Bearertoken = req.headers.authorization
        if (!Bearertoken) {
            throw new App__error(httpStatus.UNAUTHORIZED, 'you are not unAuthorized')
        }
        const token = Bearertoken.split(' ')[1]
        
        jwt.verify(token, config.jwt__access__token__secret as string, function (err, decoded) {
            if (err) {
                throw new App__error(httpStatus.UNAUTHORIZED, 'you are not authorized')
            }
            const decodedValue = (decoded as JwtPayload)?.role
            if(requiredRole && !requiredRole.includes(decodedValue)){
                throw new App__error(httpStatus.UNAUTHORIZED, 'you are not unAuthorized')
            }
            req.user = decoded as JwtPayload
            next()
        });
    })
}

export default auth 
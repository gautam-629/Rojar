import { NextFunction,Response,Request } from "express";
import CustomErrorHandler from "../services/customErrorHandler";
import TokenServices from "../services/tokenServices";
import { JwtPayload } from "jsonwebtoken";

interface IUserPayload{
    _id:string 
    activated: false 
}
declare global {
    namespace Express {
      interface Request {
        currentUser?: IUserPayload;
      }
    }
  }
const auth= async (req:Request,res:Response,next:NextFunction)=>{
        let authHeader=req.headers.authorization;
        if(!authHeader){
            return next(CustomErrorHandler.unAuthorized());
        }
        const token= authHeader.split(' ')[1];
        try {
            const payload = await TokenServices.verifyAccessToken(token);
            req.currentUser=payload as IUserPayload ;
              next();
        } catch (error) {
            return next(CustomErrorHandler.unAuthorized());
        }
}            
export default auth;
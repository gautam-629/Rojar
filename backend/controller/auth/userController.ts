import { NextFunction,Response,Request } from "express";
import userModels from "../../models/userModels";
const userControler={
   async me(req:Request,res:Response,next:NextFunction){
               try {
                const user= await userModels.findOne({_id:req.currentUser?._id});
                res.json({user:user});
               } catch (error) {
                   return next(error)
               }
    }
}
export default userControler;
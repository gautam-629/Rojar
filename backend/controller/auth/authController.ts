import { NextFunction, Request,Response } from "express"
import { phoneNumberSchema } from "../../validators/validators";
const authController={
   async sendOtp(req:Request,res:Response,next:NextFunction){
              const {phoneNumber}=req.body;
              // validation
              try {
                 const value= await phoneNumberSchema.validateAsync(phoneNumber);
              } catch (error) {
                 return next(error)
              }
              
            return  res.status(201).json({message:"OK"})
    },

    verityOtp(req:Request,res:Response,next:any){
        res.json({messge:"verify otp"})
},

}

export default authController;
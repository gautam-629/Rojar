import crypto from 'crypto';
import { Twilio } from 'twilio';
import { SMS_SID,SMS_AUTH,SMS_FROM_NUMBER } from '../config';
import { NextFunction } from 'express';
import HashService from './hashService';
class OtpServices{
    static generateOtp(){
         let number:string="1234567890"
         let otp:string="";
         for(let i=0;i<4;i++){
            otp+=number[Math.floor(Math.random()*9)];
         }
         return otp;

        //  const otp = await crypto.randomInt(1000, 9999);
        //  return otp;
      }

      static async sendBySms(phoneNumber:string,otp:string,next:NextFunction){
              const twilioClient=new Twilio(SMS_SID,SMS_AUTH,{lazyLoading:true});
              try {
              return await twilioClient.messages.create({
                 to: phoneNumber,
                 from: SMS_FROM_NUMBER,
                 body: `Your Rojgar otp is ${otp}`,
               });
             } catch (error) {
               return next(error);
             }
      }
      static verifyOtp(hashOtp:string, data:string) {
        const computedHash = HashService.hashOtp(data);
        return computedHash === hashOtp;
      }
   }
export default OtpServices;
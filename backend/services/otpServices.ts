import crypto from 'crypto';
class OtpServices{
    static generateOtp(){
         let number:string="1234567890"
         let otp:string="";
         for(let i=0;i<4;i++){
            otp+=number[Math.floor(Math.random())*10];
         }
         return otp;

        //  const otp = await crypto.randomInt(1000, 9999);
        //  return otp;
      }
}
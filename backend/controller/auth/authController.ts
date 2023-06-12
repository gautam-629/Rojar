import { NextFunction, Request, Response } from "express";
import { phoneNumberSchema, verityOtpSchema } from "../../validators/validators";
import OtpServices from "../../services/otpServices";
import HashService from '../../services/hashService';
import CustomErrorHandler from "../../services/customErrorHandler";
import userModels from "../../models/userModels";
import TokenServices from "../../services/tokenServices";
import { IUser } from "../../type";
const authController = {
   async sendOtp(req: Request, res: Response, next: NextFunction) {
      const { phoneNumber } = req.body;
      // validation
      try {
         const value = await phoneNumberSchema.validateAsync(phoneNumber);
      } catch (error) {
         return next(error)
      }
      const otp = OtpServices.generateOtp();

      //hash
      const ttl = 1000 * 60 * 60 * 24;
      const expireTime = Date.now() + ttl; // 10 min
      const data = `${phoneNumber}.${otp}.${expireTime}`;
      const hash = HashService.hashOtp(data);

      //send otp
      try {
         // await OtpServices.sendBySms(`+977${phoneNumber}`,otp,next);
         res.json({ hash: `${hash}.${expireTime}`, otp })
      } catch (error) {
         return next(error);
      }
   },

   async verityOtp(req: Request, res: Response, next: any) {
      // validate the request
      const { otp, phoneNumber, hash } = req.body;
      try {
         const value = await verityOtpSchema.validateAsync(req.body);
      } catch (error) {
         return next(error)
      }

      const [hashOtp, expireTime] = hash.split(".");

      if (Date.now() > +expireTime) {
         return next(CustomErrorHandler.timeExpire());
      }

      const data = `${phoneNumber}.${otp}.${expireTime}`;

      const isValid = OtpServices.verifyOtp(hashOtp, data);

      if (!isValid) {
         return next(CustomErrorHandler.wrongCredentials('Invalid Otp'));
      }

      // create user

      let user: IUser | null;
      try {
         user = await userModels.findOne({ phoneNumber });
         if (!user) {
            const newUser = await userModels.create({ phoneNumber });
            user = newUser.toObject();
         }

         //generate tokens
         let accessToken = TokenServices.generateAccessToken({
            _id: user._id,
         });
         let refreshToken = TokenServices.generateRefressToken({
            _id: user._id,
         });

         // store into database
         TokenServices.storeRefreshToken(refreshToken, user._id, next);

         res.json({
            user: user,
            accessToken: accessToken,
            refreshToken: refreshToken
         })
      } catch (error) {
         return next(error);
      }

   },

  async logout(req: Request, res: Response, next: NextFunction){
          try {
            const { refreshToken } = req.body;
            await TokenServices.removeToken(refreshToken);
          } catch (error) {
            return next(error)
          }

          res.json({user:null});
   }

}

export default authController;
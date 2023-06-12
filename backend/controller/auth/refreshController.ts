import { NextFunction, Request, Response } from "express";
import TokenServices from "../../services/tokenServices";
import { JwtPayload } from "jsonwebtoken";
import { IUserPayload } from "../../type";
import userModels from "../../models/userModels";
class refreshController {
     static async refresh(req: Request, res: Response, next: NextFunction) {
          const { refreshTokenFrombody } = req.body;
          //verify
          let userData: IUserPayload | JwtPayload;
          try {
               const tokenData = await TokenServices.verifyRefreshToken(refreshTokenFrombody);
               userData = tokenData as IUserPayload;
          } catch (error) {
               return next(error);
          }
          //check if token in db
          try {
               const token = await TokenServices.findRefreshToken(userData?._id, refreshTokenFrombody);
               if (!token) {
                    throw new Error('Invalid token during searching database');
               }

               // check the user
               const user = await userModels.find({ _id: userData?._id });
               if (!user) {
                    return next('No user');
               }
               // generate new token
               let accessToken = TokenServices.generateAccessToken({ _id: userData?._id });
               let refreshToken = TokenServices.generateRefressToken({ _id: userData?._id });

               //update in the database
               await TokenServices.updateRefreshToken(userData?._id, refreshToken);

               //response
               res.json({
                    user: user,
                    accessToken: accessToken,
                    refreshToken: refreshToken
               })

          } catch (error) {
               return next(error)
          }
     }
}

export default refreshController;
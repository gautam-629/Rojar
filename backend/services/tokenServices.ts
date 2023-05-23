import jwt from 'jsonwebtoken';
import RefreshModel from '../models/refreshModel';
import {refreshTokenSecret,accessTokenSecret} from '../config';
import { NextFunction } from 'express';
class TokenServices{
    static generateAccessToken(payload:any,accessTokenSecre:string=accessTokenSecret!){
        return jwt.sign(payload,accessTokenSecre,{ expiresIn:'1m'});
      }

      static generateRefressToken(payload:any,refreshTokenSecre:string=refreshTokenSecret!){
        return  jwt.sign(payload,refreshTokenSecre,{ expiresIn:'1h'})
       }

       static async storeRefreshToken(token:string,userId:any,next:NextFunction){
        try {
            await RefreshModel.create({
              token,
              userId
            })  
        } catch (error) {
          return next(error);
        }
   }
}
export default TokenServices;
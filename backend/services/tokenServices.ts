import jwt from 'jsonwebtoken';
import RefreshModel from '../models/refreshModel';
import { refreshTokenSecret, accessTokenSecret } from '../config';
import { NextFunction } from 'express';
class TokenServices {
  
  static generateAccessToken(payload: any) {
    return jwt.sign(payload, accessTokenSecret!, { expiresIn: '1h' });
  }

  static generateRefressToken(payload: any) {
    return jwt.sign(payload, refreshTokenSecret!, { expiresIn: '1h' })
  }

  static async storeRefreshToken(token: string, userId: any, next: NextFunction) {
    try {
      await RefreshModel.create({
        token,
        userId
      })
    } catch (error) {
      return next(error);
    }
  }

  static async verifyAccessToken(token:any ) {
    return jwt.verify(token, accessTokenSecret!);
  }

  static async verifyRefreshToken(refreshToken:string) {
    return jwt.verify(refreshToken, refreshTokenSecret!);
  }
}
export default TokenServices;
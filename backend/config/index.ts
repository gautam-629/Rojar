import dotenv from 'dotenv';
dotenv.config()
export const {
    PORT,DEBUG_MODE,
    HASH_SECRET,
    SMS_SID,
    SMS_AUTH,
    SMS_FROM_NUMBER,
    accessTokenSecret,
    refreshTokenSecret
}=process.env;
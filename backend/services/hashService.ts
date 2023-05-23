import crypto from 'crypto';
import {HASH_SECRET} from '../config'
class HashService{
    static hashOtp(data:any,HASH_SECRE:string=HASH_SECRET!){
        return crypto.createHmac('sha256',HASH_SECRE).update(data).digest('hex');
    }
}

export default HashService;

//data:Float64Array
 //  crypto.randomBytes(64).toString('hex')
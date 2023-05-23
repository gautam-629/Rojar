class CustomErrorHandler extends Error{
       statusCode:number;
       message: string;

    constructor(statusCode:number,message:string){
        super(message);
        this.statusCode=statusCode;
        this.message=message;
    }

    static alreadyExist(message:string) {
        return new CustomErrorHandler(409, message);
    }

    static timeExpire(message:string='Time expire') {
        return new CustomErrorHandler(500, message);
    }

    static wrongCredentials(message:string='Username or password is wrong!'){
        return new CustomErrorHandler (401,message);
    }
}
export default CustomErrorHandler;
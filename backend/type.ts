export interface IUser{
    _id:string;
    name:string;
    avatar:string;
    activated:boolean;
    role:string;
}

export interface IUserPayload{
    _id:string 
}
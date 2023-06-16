import axios from 'axios';
export const api=axios.create({
    baseURL:process.env.APP_URL,
    // withCredentials:true,
    headers: {
        'Content-type':'application/json',
        'Accept': 'application/json',
    },
});


export enum STATUSES{
    IDLE= 'idle',
    ERROR='error',
    LOADING='loading',
    SUCESS='sucess'
}
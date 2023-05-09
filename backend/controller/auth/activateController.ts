import { Request,Response } from "express"
const activateController={
    activate(req:Request,res:Response,next:any){
              res.json({messge:"Activate Controller"})
    } 
}

export default activateController;
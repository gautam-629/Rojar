import express,{NextFunction, Request,Response} from "express";
import { PORT } from "./config";
import { auth } from "./routes";
import errorHandler from "./middlewares/errorhander";
let app=express();

app.use(express.urlencoded({extended:false}))
app.use(express.json())

//config routes
app.use('/api',auth);

//config errorHandler
app.use(errorHandler)

app.listen(PORT,()=>{
    console.log(`ServerRunning at port ${PORT}`)
})
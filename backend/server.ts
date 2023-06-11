import express,{NextFunction, Request,Response} from "express";
import { PORT } from "./config";
import { auth } from "./routes";
import errorHandler from "./middlewares/errorhander";
import connectDB from "./config/database/ConnectDB";
let app=express();

app.use(express.urlencoded({extended:false}))
app.use(express.json())


//connectDB
connectDB(`${process.env.MONGO_URL}`);

//config routes
app.use('/api',auth);

app.get('*',(req,res)=>{
     res.send('404 Fount found');
})

//config errorHandler
app.use(errorHandler)

app.listen(PORT,()=>{
    console.log(`ServerRunning at port http://localhost:${PORT}`)
})


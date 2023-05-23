import mongoose, { Schema } from "mongoose";

const refreshSchema=new mongoose.Schema({
    token:{type:String,required:true},
    userId:{type:Schema.Types.ObjectId,ref:'UserModel'}
})

export default mongoose.model("Refresh",refreshSchema,'tokens');
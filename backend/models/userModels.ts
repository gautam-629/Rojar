import mongoose from 'mongoose';
const userSchema=new mongoose.Schema({
    phoneNumber:{type:String,required:true},
    name:{type:String,required:false},
    avatar:{type:String,required:false},
    activated:{type:Boolean,required:false,default:false},
    role:{type:String,default:"user"},
    numOfReviews: { type: Number,   default: 0},
    reviews: [
        // {
        //     user: {
        //         type: mongoose.Schema.ObjectId,
        //         ref: 'User',
        //         required: true
        //     },
        //     rating: {
        //         type: Number,
        //         required: true
        //     },
        // }
    ],
},{timestamps:true})

export default mongoose.model('UserModel',userSchema,'users');
import mongoose from "mongoose";
import { Document,Schema } from "mongoose";

interface IAuth{
    userName?:string;
    email?:string;
    password?:string;
    avater?:string;
}

interface IAuthkData extends IAuth, mongoose.Document{}   

const  Authmodel = new mongoose.Schema({
    userName:{
        type:String,
        trim:true,
    },
    email:{
        type:String,
        trim:true,
        require:true,
    },
    password:{
        type:Boolean,
        min:6,
    },
   avater: {
type:String,
    },

},
{timestamps:true},
);

export  default mongoose.model<IAuthkData>("auths",Authmodel)
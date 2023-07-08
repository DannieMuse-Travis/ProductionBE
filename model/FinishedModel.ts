import mongoose from "mongoose";
import { Document,Schema } from "mongoose";

interface Itask{
    time?:string;
    task?:string;
    priority?:string;
    isComplete?:boolean;
}

interface ItaskData extends Itask, mongoose.Document{}   

const  FinishedModel = new mongoose.Schema({
    task:{
        type:String,
        trim:true,
    },
    priority:{
        type:String,
    },
    isComplete:{
        type:Boolean,
        default:false,
    },

},
{timestamps:true},
);

export  default mongoose.model<ItaskData>("finished",FinishedModel)
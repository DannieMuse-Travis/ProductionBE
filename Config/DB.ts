import mongoose from "mongoose";
import  dotenv from "dotenv"
dotenv.config()

const mongooseString1:string = process.env.APPLICATION_DB!

export const dbConnect = ()=>{
    mongoose.connect(mongooseString1).then(()=>{
        console.log("conneted...🌍🌍 ");
    })
}
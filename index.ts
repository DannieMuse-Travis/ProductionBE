
import express,{Application,Request,Response} from "express"
import { MainApp } from "./mainApp"
import mongoose from "mongoose"
import  dotenv from "dotenv"
import { dbConnect } from "./Config/DB"
dotenv.config()

const  realPort = process.env.APPLICATION_PORT
// const  port : number = realPort
const app:Application = express()
// const mongooseString:string = "mongodb://localhost:27017/ProductivityDB"
MainApp(app)

const server= app.listen(realPort,()=>{
        console.log("");
        dbConnect();
    console.log("server is live 🚀🚀🌍");

})

process.on("uncaughtException",(error:any)=>{
    console.log("server is shutting down because of an uncaught exception");
    console.log("uncaught exception",(error));
    process.exit(1)
})

process.on("unhandledRejection",(reason)=>{
    console.log("server is shutting down because of an unhandled rejection");
    console.log("unhandled rejection",(reason));
    server.close(()=>{
        process.exit(1)
    })
})
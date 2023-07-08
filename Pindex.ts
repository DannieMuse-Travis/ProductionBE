import express,{Application} from "express"
const port:number= 3000
const app:Application=express()

const server = app.listen(port,()=>{
    console.log("");
})
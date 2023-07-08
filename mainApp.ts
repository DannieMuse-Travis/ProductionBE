import express, { Application,Request,Response } from "express";
import cors from "cors"
import { UpdateTask } from "./Controller/TaskControl";
import task from "./router/Router"
import progress from "./router/DoneRoute"
import finished from "./router/FinishedRoute"
import Auth from "./router/AuthRouter"

export const MainApp=(app:Application)=>{
    app
    .use(express.json())
    .use(cors())
    .use("/api/v1/",task)
    .use("/api/v2/done",progress)
    .use("/api/v3/finished",finished)
    .use("/api/v4/auth",Auth)
}

// localhost:2233/api/v1/Task
// npm i sweetalert2
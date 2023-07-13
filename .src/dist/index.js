"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mainApp_1 = require("./mainApp");
const dotenv_1 = __importDefault(require("dotenv"));
const DB_1 = require("./Config/DB");
dotenv_1.default.config();
const realPort = process.env.APPLICATION_PORT;
// const  port : number = realPort
const app = (0, express_1.default)();
// const mongooseString:string = "mongodb://localhost:27017/ProductivityDB"
(0, mainApp_1.MainApp)(app);
const server = app.listen(process.env.PORT || realPort, () => {
    console.log("");
    (0, DB_1.dbConnect)();
    console.log("server is live 🚀🚀🌍");
});
process.on("uncaughtException", (error) => {
    console.log("server is shutting down because of an uncaught exception");
    console.log("uncaught exception", (error));
    process.exit(1);
});
process.on("unhandledRejection", (reason) => {
    console.log("server is shutting down because of an unhandled rejection");
    console.log("unhandled rejection", (reason));
    server.close(() => {
        process.exit(1);
    });
});

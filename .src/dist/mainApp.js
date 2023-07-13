"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainApp = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Router_1 = __importDefault(require("./router/Router"));
const DoneRoute_1 = __importDefault(require("./router/DoneRoute"));
const FinishedRoute_1 = __importDefault(require("./router/FinishedRoute"));
const AuthRouter_1 = __importDefault(require("./router/AuthRouter"));
const TimelineRouter_1 = __importDefault(require("./router/TimelineRouter"));
const MainApp = (app) => {
    app
        .use(express_1.default.json())
        .use((0, cors_1.default)())
        .use("/api/v1/", Router_1.default)
        .use("/api/v2/done", DoneRoute_1.default)
        .use("/api/v3/finished", FinishedRoute_1.default)
        .use("/api/v4/auth", AuthRouter_1.default)
        .use("/api/v5/time", TimelineRouter_1.default);
};
exports.MainApp = MainApp;
// localhost:2233/api/v1/Task
// npm i sweetalert2

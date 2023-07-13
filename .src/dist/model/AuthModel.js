"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Authmodel = new mongoose_1.default.Schema({
    userName: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
        require: true,
    },
    password: {
        type: Boolean,
        min: 6,
    },
    avater: {
        type: String,
    },
}, { timestamps: true });
exports.default = mongoose_1.default.model("auths", Authmodel);

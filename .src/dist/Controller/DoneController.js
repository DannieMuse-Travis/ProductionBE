"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTask = exports.UpdateTask = exports.getOneTask = exports.getAllTask = exports.CreateTask = void 0;
const DoneModel_1 = __importDefault(require("../model/DoneModel"));
const CreateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { task, priority } = req.body;
        const tasked = yield DoneModel_1.default.create({
            task, priority
        });
        return res.status(201).json({
            message: "task created",
            data: tasked,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "task cant  be created"
        });
    }
});
exports.CreateTask = CreateTask;
const getAllTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasked = yield DoneModel_1.default.find();
        return res.status(201).json({
            message: "task created",
            data: tasked,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "task can't be gotten"
        });
    }
});
exports.getAllTask = getAllTask;
const getOneTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const tasked = yield DoneModel_1.default.findById(id);
        return res.status(201).json({
            message: "task created",
            data: tasked,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "task cant  be created"
        });
    }
});
exports.getOneTask = getOneTask;
const UpdateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const tasked = yield DoneModel_1.default.findByIdAndUpdate(id, {
            isComplete: true,
        }, { new: true });
        return res.status(201).json({
            message: "task update",
            data: tasked,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "task cant  be created"
        });
    }
});
exports.UpdateTask = UpdateTask;
const DeleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const tasked = yield DoneModel_1.default.findByIdAndDelete(id);
        return res.status(201).json({
            message: "task delete",
            data: tasked,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "task cant  be created"
        });
    }
});
exports.DeleteTask = DeleteTask;

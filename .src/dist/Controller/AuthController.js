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
exports.deleteOneUser = exports.readOneUser = exports.UpdateUser = exports.signInAccout = exports.CreateUser = exports.ReadUser = void 0;
const AuthModel_1 = __importDefault(require("../model/AuthModel"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const ReadUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield AuthModel_1.default.find();
        return res.status(200).json({
            message: "get all users",
            data: user,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "User not found"
        });
    }
});
exports.ReadUser = ReadUser;
// npm i @types/bcrypt ==== npm i bcrypt
const CreateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userName, password, email, avater } = req.body;
        const salt = yield bcrypt_1.default.genSalt(10);
        const hash = yield bcrypt_1.default.hash(password, salt);
        const newUser = yield AuthModel_1.default.create({ userName, password: hash, email, avater });
        return res.status(200).json({
            message: "get all users",
            data: newUser,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "User not found"
        });
    }
});
exports.CreateUser = CreateUser;
const signInAccout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield AuthModel_1.default.findOne({ email });
        if (user) {
            const passed = yield bcrypt_1.default.compare(password, user.password);
            if (passed) {
                return res.status(201).json({
                    message: `Welcome back ${user.userName}`
                });
            }
            else {
                return res.status(404).json({
                    message: 'password is incorrect',
                });
            }
        }
        else {
            return res.status(404).json({
                message: 'user not found'
            });
        }
    }
    catch (error) {
        return res.status(404).json({
            message: error.message
        });
    }
});
exports.signInAccout = signInAccout;
const UpdateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { userName, avater } = req.body;
        const user = yield AuthModel_1.default.findByIdAndUpdate(id, { userName, avater }, { new: true });
        return res.status(200).json({
            message: "Update all users",
            data: user,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "User not found"
        });
    }
});
exports.UpdateUser = UpdateUser;
const readOneUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield AuthModel_1.default.findById(id);
        return res.status(200).json({
            message: "Get one User Successfully",
            data: user,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "User not found"
        });
    }
});
exports.readOneUser = readOneUser;
const deleteOneUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield AuthModel_1.default.findByIdAndDelete(id);
        return res.status(200).json({
            message: "Deleted Successfully",
            data: user,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "User not found"
        });
    }
});
exports.deleteOneUser = deleteOneUser;

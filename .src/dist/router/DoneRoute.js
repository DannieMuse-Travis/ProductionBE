"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const DoneController_1 = require("../Controller/DoneController");
const router = express_1.default.Router();
router.route("/")
    .get(DoneController_1.getAllTask)
    .post(DoneController_1.CreateTask);
router.route("/:id")
    .get(DoneController_1.getOneTask)
    .patch(DoneController_1.UpdateTask)
    .delete(DoneController_1.DeleteTask);
exports.default = router;

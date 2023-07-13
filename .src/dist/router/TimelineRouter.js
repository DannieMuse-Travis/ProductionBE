"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TaskControl_1 = require("../Controller/TaskControl");
const router = (0, express_1.Router)();
router.route("/")
    .get(TaskControl_1.getTask)
    .post(TaskControl_1.CreateTask);
router.route("/:id")
    .get(TaskControl_1.getOneTask)
    .patch(TaskControl_1.UpdateTask)
    .delete(TaskControl_1.DeleteTask);
exports.default = router;

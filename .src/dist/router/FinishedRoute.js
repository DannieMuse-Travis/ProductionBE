"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const FinishedController_1 = require("../Controller/FinishedController");
const router = (0, express_1.Router)();
router.route("/")
    .get(FinishedController_1.getTask)
    .post(FinishedController_1.CreateTask);
router.route("/:id")
    .get(FinishedController_1.getOneTask)
    .patch(FinishedController_1.UpdateTask)
    .delete(FinishedController_1.DeleteTask);
exports.default = router;

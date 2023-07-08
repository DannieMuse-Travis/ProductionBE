import express,{ Router } from "express";
import { CreateTask, DeleteTask, UpdateTask, getOneTask, getTask } from "../Controller/FinishedController";


const router = Router();
router.route("/")
.get(getTask)
.post(CreateTask)

router.route("/:id")
.get(getOneTask)
.patch(UpdateTask)
.delete(DeleteTask)

export default router
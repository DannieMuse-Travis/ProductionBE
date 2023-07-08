import express,{ Router } from "express";
import { CreateTask, DeleteTask, UpdateTask, getOneTask, getAllTask } from "../Controller/DoneController";


const router = express.Router();
router.route("/")
.get(getAllTask)
.post(CreateTask)

router.route("/:id")
.get(getOneTask)
.patch(UpdateTask)
.delete(DeleteTask)

export default router
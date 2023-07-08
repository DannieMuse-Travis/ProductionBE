import express,{ Router } from "express";
import { CreateUser, ReadUser, UpdateUser, deleteOneUser, readOneUser, signInAccout } from "../Controller/AuthController";


const router = express.Router();
router.route("/all-users").get(ReadUser)
router.route('/register').post(CreateUser)

router.route("/:id/user-info").get(readOneUser).patch(UpdateUser)
.delete(deleteOneUser);
router.route('/sign-in').post(signInAccout)

export default router
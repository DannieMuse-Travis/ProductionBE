"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AuthController_1 = require("../Controller/AuthController");
const router = express_1.default.Router();
router.route("/all-users").get(AuthController_1.ReadUser);
router.route('/register').post(AuthController_1.CreateUser);
router.route("/:id/user-info").get(AuthController_1.readOneUser).patch(AuthController_1.UpdateUser)
    .delete(AuthController_1.deleteOneUser);
router.route('/sign-in').post(AuthController_1.signInAccout);
exports.default = router;

import express from "express";
import { getCurrentUser } from "../controllers/user.controller.js";
import isUserAuth from "../middlewares/isAuth.js";
const userRouter = express.Router();

userRouter.get("/current-user", isUserAuth, getCurrentUser);

export default userRouter;

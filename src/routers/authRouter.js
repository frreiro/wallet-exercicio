import { Router } from "express";
import { singIn, singUp } from "../controllers/authController.js";
import { checkUser, userExist } from "../middlewares/authMiddleware.js";


const authRouter = Router();

authRouter.post("/sign-up", userExist, singUp);

authRouter.post("/sign-in", checkUser, singIn);


export default authRouter;
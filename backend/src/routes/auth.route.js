import express from "express";
import { checkAuth, login, logout, signup, updateProfile } from "../controllers/auth.controller.js";
import isAuthenticated from "../middleware/auth.middleware.js";

const authRouter = express.Router();

authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.put("/update-profile", isAuthenticated, updateProfile);
authRouter.get("/check", isAuthenticated, checkAuth);

export default authRouter;

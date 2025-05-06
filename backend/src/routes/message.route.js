import express from "express";
import isAuthenticated from "../middleware/auth.middleware.js";
import { getMessages, getUsersForSidebar, sendMessage } from "../controllers/message.controller.js";

const messageRouter = express.Router();

messageRouter.get("/users", isAuthenticated, getUsersForSidebar);
messageRouter.get("/:id", isAuthenticated, getMessages);
messageRouter.post("/send/:id", isAuthenticated, sendMessage);

export default messageRouter;
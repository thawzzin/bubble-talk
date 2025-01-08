import express from "express";
import {
  getMessages,
  getUsers,
  sendMessage,
} from "../controllers/message.controller.js";
import { protectedRoute } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/users", protectedRoute, getUsers);
router.get("/:id", protectedRoute, getMessages);
router.post("/:id", protectedRoute, sendMessage);

export default router;

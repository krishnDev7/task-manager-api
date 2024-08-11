import express from "express";
import { taskController } from "../controllers/task.controller";

export const router = express.Router();

router.post("/task", taskController.addTask);
router.get("/task", taskController.getTasks);
router.get("/task/:id", taskController.getTaskById);
router.patch("/task/:id", taskController.updateTask);
router.delete("/task/:id", taskController.deleteTask);

import { Request, Response } from "express";
import { TaskSchemaValidate } from "../models/task";
import { taskServices } from "../services/task.service";

class TaskController {
  addTask = async (req: Request, res: Response) => {
    const data = {
      name: req.body.name,
      description: req.body.description,
      completed: req.body.completed,
      urgent: req.body.urgent,
      important: req.body.important,
      dueDate: req.body.dueDate,
    };

    const { error, value } = TaskSchemaValidate.validate(data);

    if (error) {
      res.send(error.message);
    } else {
      const task = await taskServices.createTask(value);
      res.status(200).send(task);
    }
  };

  getTasks = async (req: Request, res: Response) => {
    const tasks = await taskServices.getTasks();
    res.status(200).send(tasks);
  };

  getTaskById = async (req: Request, res: Response) => {
    const id = req.params.id;
    const task = await taskServices.getTaskById(id);
    res.status(200).send(task);
  };

  updateTask = async (req: Request, res: Response) => {
    const id = req.params.id;
    const task = await taskServices.updateTask(id, req.body);
    res.status(200).send(task);
  };

  deleteTask = async (req: Request, res: Response) => {
    const id = req.params.id;
    const task = await taskServices.deleteTask(id);
    res.status(200).send("Task Deleted Successfully");
  };
}

export const taskController = new TaskController();

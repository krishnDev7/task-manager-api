import { Task } from "../models/task";

export class TaskService {
  async createTask(data: any) {
    try {
      const newTask = await Task.create(data);
      return newTask;
    } catch (error) {
      console.log(error);
    }
  }

  async getTasks() {
    try {
      const tasks = await Task.find({});
      return tasks;
    } catch (error) {
      console.log(error);
    }
  }

  async getTaskById(id: string) {
    try {
      const task = await Task.findById({ _id: id });
      return task;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteTask(id: string) {
    try {
      const task = await Task.findByIdAndDelete(id);
      if (!task) {
        return "Task is not available";
      }
    } catch (error) {
      console.log(error);
    }
  }

  async markAsComplete(id: string) {
    try {
      const task = await Task.findByIdAndUpdate(id, {
        completed: true,
      });
      return task;
    } catch (error) {}
  }

  async markAsIncomplete(id: string) {
    try {
      const task = await Task.findByIdAndUpdate(id, {
        completed: false,
      });
      return task;
    } catch (error) {}
  }

  async updateTask(id: string, data: any) {
    try {
      const task = await Task.findByIdAndUpdate(id, data);
      return task;
    } catch (error) {
      console.log(error);
    }
  }
}

export const taskServices = new TaskService();

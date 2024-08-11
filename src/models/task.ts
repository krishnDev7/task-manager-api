import { Schema, model } from "mongoose";
import Joi from "joi";

//validation Schema
export const TaskSchemaValidate = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  dueDate: Joi.string().required(),
  urgent: Joi.boolean(),
  completed: Joi.boolean(),
  important: Joi.boolean(),
});

interface ITask {
  name: string;
  description: string;
  dueDate: string;
  completed: boolean;
  urgent: boolean;
  important: boolean;
}

const taskSchema = new Schema<ITask>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dueDate: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
  important: {
    type: Boolean,
    required: true,
  },
  urgent: {
    type: Boolean,
    required: true,
  },
});

export const Task = model<ITask>("Task", taskSchema);

import mongoose from "mongoose";
import { Schema, models, model } from "mongoose";

export interface ITask extends Document {
    task: string;
    description?: string;
    status: string;
  }
  


// Defined a Schema
const TaskSchema = new Schema({
  task: {
    type: String,
    required: true,
    trim:true,
  },
  description: {
    type: String,
    default:"",
    trim:true,
  },
  status: {
    type: String,
    required:true,
    default:"pending",
  },
  
});

// Creating a model

const TaskModel = models.Task || model("Task", TaskSchema);

export default TaskModel;

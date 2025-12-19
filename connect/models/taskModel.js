import mongoose from "mongoose";
import { time } from "three/tsl";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },
  },
  {
    timestamps: true, // adds createdAt & updatedAt
  }
);

const Task = mongoose.model("Task", taskSchema);

export default Task;
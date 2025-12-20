import asyncHandler from 'express-async-handler';
import Task from '../connect/models/taskModel.js';

const getAllTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json(tasks);
});

const getTask = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  if (!task) {
    res.status(404);
    throw new Error('Task not found');
  }
  res.status(200).json(task);
});

const setTask = asyncHandler(async (req, res) => {
  const { title, description, priority } = req.body;
  if (
    !title ||
    !title.trim() ||
    !description ||
    !description.trim() ||
    !priority
  ) {
    res.status(400);
    throw new Error('Please add title, description, and priority');
  }
  const newTask = new Task({
    title: title.trim(),
    description: description.trim(),
    priority,
  });
  const savedTask = await newTask.save();
  res.status(201).json(savedTask);
});

const updateTask = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Update Task' });
});

const deleteTask = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Delete Task' });
});

export { getAllTasks, getTask, setTask, updateTask, deleteTask };

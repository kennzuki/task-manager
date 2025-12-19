import express from 'express';

import {
  getAllTasks,
  getTask,
  setTask,
  updateTask,
  deleteTask,
} from '../controller/taskController.js';
const router = express.Router();

router.get('/', getAllTasks);
router.get('/:id', getTask);
router.post('/', setTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;

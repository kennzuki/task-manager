import express from 'express';

import{ registerUser, loginUser, getCurrentUser } from '../controller/userController.js';
const router = express.Router();

router.post('/', registerUser);
router.get('/login', loginUser);
router.post('/current', getCurrentUser);


export default router;
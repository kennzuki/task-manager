import express from 'express';

import{ registerUser, loginUser, getCurrentUser } from '../controller/userController.js';
const router = express.Router();

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/current', getCurrentUser);


export default router;
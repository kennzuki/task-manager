import express from 'express';
import protect from '../middleware/authMiddleware.js'
import{ registerUser, loginUser, getCurrentUser } from '../controller/userController.js';
const router = express.Router();

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/current',protect, getCurrentUser);


export default router;
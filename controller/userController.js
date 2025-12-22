
import asyncHandler from 'express-async-handler';
import User from '../connect/models/userModel.js';



const registerUser = asyncHandler(async (req, res) => {
res.json({ message:'‘Register User successful'})
})
const loginUser = asyncHandler(async (req, res) => {
res.json({ message: 'Login User successful' })
})
const getCurrentUser = asyncHandler(async (req, res) => {
res.json({ message: 'Current user data' })
})

export { registerUser, loginUser, getCurrentUser }
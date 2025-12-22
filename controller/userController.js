import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../connect/models/userModel.js';

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error({ message: 'input all fields' });
  }
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error('not valid');
  }
 
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
    });
  } else {
    res.status(400); throw new Error({ message: 'unable to create user' });
  }
});
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: 'Login User successful' });
});
const getCurrentUser = asyncHandler(async (req, res) => {
  res.json({ message: 'Get Current User successful' });
});

export { registerUser, loginUser, getCurrentUser };

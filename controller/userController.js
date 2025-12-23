import asyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import User from '../connect/models/userModel.js';
import { generateJWTtoken } from "../utils/generateTokens.js";


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
      accessToken,
      _id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      token:generateJWTtoken(user._id)
     
    });
  } else {
    res.status(400);
    throw new Error({ message: 'unable to create user' });
  }
});
//login user
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
       token:generateJWTtoken(user._id)
    });
  } else {
    res.status(400);
    throw new Error('Invalid data');
  }
});

//get user
const getCurrentUser = asyncHandler(async (req, res) => {
 const{_id,name,email} = await User.findById(req.user.id)
 res.status(200).json({id:_id,name,email});
});



export { registerUser, loginUser, getCurrentUser };

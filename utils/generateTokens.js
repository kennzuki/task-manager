import jwt from 'jsonwebtoken';


export const generateJWTtoken = id => jwt.sign({ id },
process.env.JWT_SECRET, { expiresIn: '5d' })
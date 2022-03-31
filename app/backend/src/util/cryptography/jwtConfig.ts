import * as fs from 'fs/promises';
import * as jwt from 'jsonwebtoken';

const JWT_DATA:object = {
  expiresIn: '100d',
  algorithm: 'HS256',
};

export const tokenGeneration = async (email:string, password:string) => {
  const SECRET = await fs.readFile('././jwt.evaluation.key', 'utf-8');
  const token = jwt.sign({ email, password }, SECRET, JWT_DATA);
  return token;
};

export const decodeToken = async (token:string) => {
  const user = jwt.decode(token);
  return user;
};

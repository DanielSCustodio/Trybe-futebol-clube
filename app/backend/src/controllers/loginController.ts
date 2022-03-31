import { Request, Response } from 'express';
import loginService from '../service/loginService';

const login = async (req:Request, res:Response) => {
  const { email, password } = await req.body;
  const user = await loginService.login(email, password);
  return res.status(200).json(user);
};
export default { login };

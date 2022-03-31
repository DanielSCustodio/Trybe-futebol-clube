import { Request, Response } from 'express';
import loginService from '../service/loginService';
import StatusCode from '../enum/StatusCode';

const login = async (req:Request, res:Response) => {
  const { email, password } = await req.body;
  const user = await loginService.login(email, password);
  return res.status(StatusCode.OK).json(user);
};

const validateLogin = async (req: Request, res: Response) => {
  const { authorization } = req.headers;
  if (authorization) {
    const role = await loginService.validateLogin(authorization);
    res.status(StatusCode.OK).json(role);
  }
};
export default { login, validateLogin };

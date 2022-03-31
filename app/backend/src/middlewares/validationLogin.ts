import { NextFunction, Request, Response } from 'express';
import * as bcrypt from 'bcryptjs';
import sendResponse from '../util/responseError/responseError';
import ResponseMessage from '../enum/ReponseForErros';
import Users from '../database/models/Users';

const checkEmail = async (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;
  const user = await Users.findOne({ where: { email } });
  if (!user) {
    const result = await sendResponse(ResponseMessage.FAIL_LOGIN);
    if (result) {
      const { status, message } = result;
      return res.status(status).json({ message });
    }
  }
  next();
};

const checkPassword = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  const user = await Users.findOne({ where: { email } });

  if (user) {
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      const result = await sendResponse(ResponseMessage.FAIL_LOGIN);
      if (result) {
        const { status, message } = result;
        return res.status(status).json({ message });
      }
    }
  }

  next();
};

export default { checkEmail, checkPassword };

import { NextFunction, Request, Response } from 'express';
import * as bcrypt from 'bcryptjs';
import sendResponse from '../util/responseError/responseError';
import ResponseMessage from '../enum/ReponseForErros';
import Users from '../database/models/Users';

console.log('passei aqui'); //  acessado pelo teste 88.23

const checkFields = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = await req.body;
  if (!email || !password) { // Fazendo validação igual aos Incas e Astecas porque o Joi não funfa nos testes😓
    const result = await sendResponse(ResponseMessage.ALL_FIELDS_MUST_BE_FILLED);
    console.log(result, 'testando o teste');
    if (result) {
      const { status, message } = result;
      return res.status(status).json({ message });
    }
  }
  next();
};

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
    const validPassword = await bcrypt.compare(password, user.password); // https://www.npmjs.com/package/bcrypt
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

export default { checkEmail, checkPassword, checkFields };

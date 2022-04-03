import { Router } from 'express';
import validationLogin from '../middlewares/validationLogin';
import loginController from '../controllers/loginController';

const login = Router();

login.post(
  '/',
  validationLogin.checkFields,
  validationLogin.checkEmail,
  validationLogin.checkPassword,
  loginController.login,
);

login.get(
  '/validate',
  loginController.validateLogin,
);

export default login;

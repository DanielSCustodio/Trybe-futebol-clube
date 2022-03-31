import { Router } from 'express';
import validationLogin from '../middlewares/validationLogin';
import loginController from '../controllers/loginController';

const login = Router();

login.post(
  '/',
  validationLogin.checkEmail,
  validationLogin.checkPassword,
  loginController.login,
);

export default login;

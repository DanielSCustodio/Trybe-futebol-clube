import User from '../interface/user';
import { tokenGeneration, decodeToken } from '../util/cryptography/jwtConfig';
import Users from '../database/models/Users';

const validateLogin = async (token:string) => {
  const user = await decodeToken(token);
  const { email } = user as User;
  const { role } = await Users.findOne({ where: { email } }) as User;
  return role;
};

const login = async (email:string, password:string) => {
  const user = await Users.findOne({ where: { email },
    attributes: {
      exclude: ['password'],
    } });
  const token = await tokenGeneration(email, password);
  validateLogin(token);
  return { user, token };
};

export default { login, validateLogin };

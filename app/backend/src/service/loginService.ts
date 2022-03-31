import * as jwt from 'jsonwebtoken';
import Users from '../database/models/Users';
import JWT_DATA from '../util/cryptography/jwtConfig';

const login = async (email:string, password:string) => {
  const user = await Users.findOne({ where: { email } });
  const token = jwt.sign({ email, password }, 'SECRET', JWT_DATA);
  return { user, token };
};

export default { login };

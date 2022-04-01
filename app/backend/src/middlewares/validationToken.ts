import { Request, Response, NextFunction } from 'express';
import sendResponse from '../util/responseError/responseError';
import ResponseMessage from '../enum/ReponseForErros';
import { decodeToken } from '../util/cryptography/jwtConfig';

const findToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) {
    const result = await sendResponse(ResponseMessage.TOKEN_NOT_FOUND);
    if (result) {
      const { status, message } = result;
      return res.status(status).json({ message });
    }
  }
  next();
};

const checkToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (token) {
    const user = await decodeToken(token);
    if (!user) {
      const result = await sendResponse(ResponseMessage.EXPIRED_OR_INVALID);
      if (result) {
        const { status, message } = result;
        return res.status(status).json({ message });
      }
    }
  }

  next();
};

export default {
  findToken,
  checkToken,
};

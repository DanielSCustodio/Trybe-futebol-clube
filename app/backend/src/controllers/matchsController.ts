import { Request, Response } from 'express';
import matchsService from '../service/matchsService';
import StatusCode from '../enum/StatusCode';

const getAll = async (_req: Request, res: Response) => {
  const match = await matchsService.getAll();
  res.status(StatusCode.OK).json(match);
};

export default { getAll };

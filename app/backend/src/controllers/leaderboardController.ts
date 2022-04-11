import { Request, Response } from 'express';
import leaderboardService from '../service/leaderboardService';
import StatusCode from '../enum/StatusCode';

const classificationHome = async (req: Request, res: Response) => {
  const result = await leaderboardService.classificationHome();
  res.status(StatusCode.OK).json(result);
};

const classificationAway = async (req: Request, res: Response) => {
  const result = await leaderboardService.classificationAway();
  res.status(StatusCode.OK).json(result);
};

export default { classificationHome, classificationAway };

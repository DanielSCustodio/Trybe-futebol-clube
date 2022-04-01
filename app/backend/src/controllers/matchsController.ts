import { Request, Response } from 'express';
import matchsService from '../service/matchsService';
import StatusCode from '../enum/StatusCode';

const getAll = async (_req: Request, res: Response) => {
  const match = await matchsService.getAll();
  return res.status(StatusCode.OK).json(match);
};

const create = async (req: Request, res: Response) => {
  const match = await matchsService.create(req.body);
  return res.status(StatusCode.CREATED).json(match);
};

const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const match = await matchsService.update(+id);
  return res.status(StatusCode.OK).json(match);
};

const updateMatchLive = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { homeTeamGoals, awayTeamGoals } = req.body;
  const match = await matchsService.updateMatchLive(+id, homeTeamGoals, awayTeamGoals);
  return res.status(StatusCode.OK).json(match);
};

export default { getAll, create, update, updateMatchLive };

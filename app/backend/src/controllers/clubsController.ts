import { Request, Response } from 'express';
import clubsService from '../service/clubsService';
import StatusCode from '../enum/StatusCode';

const getAll = async (_req: Request, res: Response) => {
  const clubs = await clubsService.getAll();
  res.status(StatusCode.OK).json(clubs);
};

const getById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const club = await clubsService.getById(+id);
  res.status(StatusCode.OK).json(club);
};

export default { getAll, getById };

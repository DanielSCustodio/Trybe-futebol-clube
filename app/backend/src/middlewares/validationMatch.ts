import { Request, Response, NextFunction } from 'express';
import ResponseMessage from '../enum/ReponseForErros';
import sendResponse from '../util/responseError/responseError';
import Clubs from '../database/models/Clubs';

const checkFields = async (req: Request, res: Response, next: NextFunction) => {
  const { homeTeamGoals, awayTeamGoals, inProgress } = req.body;

  if (!homeTeamGoals || !awayTeamGoals || !inProgress) {
    const result = await sendResponse(ResponseMessage.ALL_FIELDS_MUST_BE_FILLED);
    if (result) {
      const { status, message } = result;
      return res.status(status).json({ message });
    }
  }
  next();
};

const checkClubsEquals = async (req: Request, res: Response, next: NextFunction) => {
  const { homeTeam, awayTeam } = req.body;
  if (homeTeam === awayTeam) {
    const result = await sendResponse(ResponseMessage.MATCH_WITH_TWO_EQUAL_TEAM);
    if (result) {
      const { status, message } = result;
      return res.status(status).json({ message });
    }
  }
  next();
};

const checkHomeClubExists = async (req: Request, res: Response, next: NextFunction) => {
  const { homeTeam } = req.body;
  const id = homeTeam;
  const clubHome = await Clubs.findOne({ where: { id } });
  if (!clubHome) {
    const result = await sendResponse(ResponseMessage.THERE_IS_NO_TEAM);
    if (result) {
      const { status, message } = result;
      return res.status(status).json({ message });
    }
  }
  next();
};

const checkAwayClubExists = async (req: Request, res: Response, next: NextFunction) => {
  const { awayTeam } = req.body;
  const id = awayTeam;
  const clubAwayTeam = await Clubs.findOne({ where: { id } });
  if (!clubAwayTeam) {
    const result = await sendResponse(ResponseMessage.THERE_IS_NO_TEAM);
    if (result) {
      const { status, message } = result;
      return res.status(status).json({ message });
    }
  }

  next();
};

const checkId = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  if (!id) {
    const result = await sendResponse(ResponseMessage.NOT_FOUND_ID);
    if (result) {
      const { status, message } = result;
      return res.status(status).json({ message });
    }
  }
  next();
};

export default { checkFields, checkClubsEquals, checkHomeClubExists, checkAwayClubExists, checkId };

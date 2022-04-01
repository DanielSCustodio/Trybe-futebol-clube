import { Router } from 'express';
import matchsController from '../controllers/matchsController';
import validationToken from '../middlewares/validationToken';
import validationMatch from '../middlewares/validationMatch';

const matchs = Router();

matchs.get('/', matchsController.getAll);
matchs.post(
  '/',
  validationToken.findToken,
  validationToken.checkToken,
  validationMatch.checkHomeClubExists,
  validationMatch.checkAwayClubExists,
  validationMatch.checkClubsEquals,
  validationMatch.checkFields,
  matchsController.create,
);

matchs.patch('/:id/finish', matchsController.update);
export default matchs;

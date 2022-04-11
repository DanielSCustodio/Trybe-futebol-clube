import { Router } from 'express';
import leaderboardController from '../controllers/leaderboardController';

const leaderboard = Router();

leaderboard.get('/home', leaderboardController.classificationHome);
leaderboard.get('/away', leaderboardController.classificationAway);

export default leaderboard;

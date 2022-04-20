import Matchs from '../database/models/Matchs';
import Clubs from '../database/models/Clubs';
import { clubDataCollectionHome, clubDataCollectionAway,
} from
  '../util/calculatorLeaderBoard/clubDataCollection';
import rankingOrdering from '../util/calculatorLeaderBoard/rankingOrdering';

const classificationHome = async () => {
  const matchsInProgress = await Matchs.findAll({ // Se fizer com arrow function dá 💩 no map e filter
    where: { inProgress: false },
    include: [{ model: Clubs, as: 'homeClub', attributes: ['clubName'] },
      { model: Clubs, as: 'awayClub', attributes: ['clubName'] }],
  });

  const getAllClubs = await Clubs.findAll();
  const filterHomeClub = getAllClubs.map((club) => {
    const matchHome = matchsInProgress.filter((match: any) =>
      club.clubName === match.homeClub.clubName);
    const data = clubDataCollectionHome(club.clubName, matchHome);
    return data;
  });
  return rankingOrdering(filterHomeClub);
};

const classificationAway = async () => {
  const matchsInProgress = await Matchs.findAll({
    where: { inProgress: false },
    include: [{ model: Clubs, as: 'homeClub', attributes: ['clubName'] },
      { model: Clubs, as: 'awayClub', attributes: ['clubName'] }],
  });

  const getAllClubs = await Clubs.findAll();

  const filterAwayClub = getAllClubs.map((club) => {
    const matchAway = matchsInProgress.filter((match: any) =>
      club.clubName === match.awayClub.clubName);
    const data = clubDataCollectionAway(club.clubName, matchAway);
    return data;
  });

  return rankingOrdering(filterAwayClub);
};

const classification = async () => {
  const matchsInProgress = await Matchs.findAll({
    where: { inProgress: false },
    include: [{ model: Clubs, as: 'homeClub', attributes: ['clubName'] },
      { model: Clubs, as: 'awayClub', attributes: ['clubName'] }],
  });

  const getAllClubs = await Clubs.findAll();

  const filterAwayClub = getAllClubs.map((club) => {
    const matchAway = matchsInProgress.filter((match: any) =>
      club.id === match.homeClub);
    const data = clubDataCollectionHome(club.clubName, matchAway);
    return data;
  });

  return rankingOrdering(filterAwayClub);
};

export default { classificationHome, classificationAway, classification };

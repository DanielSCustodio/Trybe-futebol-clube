import Clubs from '../database/models/Clubs';
import Matchs from '../database/models/Matchs';

const getAll = async () => {
  const match = await Matchs.findAll({
    attributes: { exclude: ['home_team', 'away_team'] },
    include: [{
      model: Clubs, as: 'homeClub', attributes: ['clubName'] },
    { model: Clubs, as: 'awayClub', attributes: ['clubName'],
    }],
  });
  return match;
};
export default { getAll };

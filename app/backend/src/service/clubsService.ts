import Clubs from '../database/models/Clubs';

const getAll = async () => {
  const clubs = await Clubs.findAll();
  return clubs;
};

const getById = async (id:number) => {
  const club = await Clubs.findOne({ where: { id } });
  return club;
};

export default { getAll, getById };

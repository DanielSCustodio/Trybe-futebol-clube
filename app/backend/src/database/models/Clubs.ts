import { Model, DataTypes } from 'sequelize';
import db from '.';

class Clubs extends Model {
  id: number;

  clubName: string;
}

Clubs.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },

    club_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'Clubs',
    timestamps: false,
  },
);

export default Clubs;

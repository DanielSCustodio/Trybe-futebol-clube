import { Model, DataTypes } from 'sequelize';
import db from '.';
import Clubs from './Clubs';

class Matchs extends Model {
  id: number;

  homeTeam: number;

  homeTeamGoals: number;

  awayTeam: number;

  awayTeamGoals: number;

  inProgress: boolean;
}

Matchs.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },

    homeTeam: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'clubs',
        key: 'id',
      },
    },
    homeTeamGoals: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    awayTeam: {
      type: DataTypes.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: false,
      references: {
        model: 'clubs',
        key: 'id',
      },
    },

    awayTeamGoals: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    inProgress: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },

  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'Matchs',
    timestamps: false,
  },
);

Matchs.belongsTo(Clubs, { foreignKey: 'home_team', targetKey: 'id', as: 'homeClub' });
Matchs.belongsTo(Clubs, { foreignKey: 'away_team', targetKey: 'id', as: 'awayClub' });

export default Matchs;

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('matchs',{
      id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },

      home_team:{
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references:{
          key:'id',
          model:'clubs'
        }
      },

      home_team_goals:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      away_team:{
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate:'CASCADE',
        references:{
          key:'id',
          model:'clubs'
        }
      },

      away_team_goals:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      in_progress:{
        type: Sequelize.INTEGER,
        allowNull: false,
      }
    },

    {
      timestamps:false
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('matchs');
  }
};

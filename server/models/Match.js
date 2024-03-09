const { DataTypes } = require('sequelize');
const db = require('../config/database');
const Team = require('./Team');

const Match = db.define('Match', {
  team_a_code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  team_b_code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  venue: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  total_tickets_for_sale: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  total_tickets_available: {
    type: DataTypes.NUMBER,
    allowNull: false,
  }
});

Match.belongsTo(Team, { foreignKey: 'team_a_code', as: 'TeamA' });
Match.belongsTo(Team, { foreignKey: 'team_b_code', as: 'TeamB' });

module.exports = Match;

const { DataTypes } = require('sequelize');
const db = require('../config/database');
const Match = require('./Match');

const Team = db.define('Team', {
  code: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  logo_url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Team.hasMany(Match, { foreignKey: 'team_a_code', as: 'MatchesA' });
Team.hasMany(Match, { foreignKey: 'team_b_code', as: 'MatchesB' });

module.exports = Team;
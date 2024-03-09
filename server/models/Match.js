const { DataTypes } = require('sequelize');
const db = require('../config/database');

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

module.exports = Match;

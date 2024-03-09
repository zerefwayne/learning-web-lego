const { DataTypes } = require('sequelize');
const db = require('../config/database');

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

module.exports = Team;

// config/database.js
const { Sequelize } = require('sequelize');

const db = new Sequelize('postgres', 'postgres', 'password', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = db;

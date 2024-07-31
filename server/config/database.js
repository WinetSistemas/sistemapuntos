// server/config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('your_database_name', 'your_database_user', 'your_database_password', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
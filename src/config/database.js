const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mashrue', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;

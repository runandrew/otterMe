// Family Model

// Required libraries
const Sequelize = require('sequelize');

// Required files
const db = require('./_db');

const Family = db.define('family', {
  surname: Sequelize.STRING
});

module.exports = Family;

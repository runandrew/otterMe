// Toys Model

// Required libraries
const Sequelize = require('sequelize');

// Required files
const db = require('./_db');

const Toy = db.define('toy', {
  name: Sequelize.STRING
});

module.exports = Toy;

// Otter Model

// Required libraries
const Sequelize = require('sequelize');

// Required files
const db = require('./_db');

const Otter = db.define('otter', {
  name: Sequelize.STRING,
  imgUrl: Sequelize.TEXT
});

module.exports = Otter;

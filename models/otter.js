// Otter Model

// Required libraries
const Sequelize = require('sequelize');

// Required files
const db = require('./_db');

const Otter = db.define('otter', {
  name: Sequelize.STRING
});

module.exports = Otter;

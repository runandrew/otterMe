// Database index

// Required libraries
const Sequelize = require('sequelize');

var db = new Sequelize('postgres://localhost:5432/otterMe', {
  logging: false
});

module.exports = db;

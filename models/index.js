// Main database file

// Required files
const db = require('./_db');
const Otter = require('./otter');
const Family = require('./family');

// Relations
Otter.belongsTo(Family);
Family.hasMany(Otter);


module.exports = db;

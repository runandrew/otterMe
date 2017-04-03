// Main database file

// Required files
const db = require('./_db');
const Otter = require('./otter');
const Family = require('./family');
const Toy = require('./toy');

// Relations
Otter.belongsTo(Family);
Family.hasMany(Otter);

Toy.belongsToMany(Otter, { through: 'toyOtter' });
Otter.belongsToMany(Toy, { through: 'toyOtter' });

module.exports = {
  db,
  Otter,
  Family,
  Toy
};

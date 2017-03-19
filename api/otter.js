// Otter Routes

// Required libraries
const routerOtter = require('express').Router();
module.exports = routerOtter;

// Required files
const Otter = require('../models/otter');
const Family = require('../models/family');

// Routes

routerOtter.post('/add', (req, res, next) => {
  Otter.create(req.body)
    .then((createdOtter) => {
      res.status(200).send(createdOtter);
    })
    .catch(next);
});

routerOtter.get('/:otterId', (req, res, next) => {
  Otter.findById(req.params.otterId, {
    include: [Family]
  })
    .then((foundOtter) => {
      res.status(200).send(foundOtter);
    });
})

routerOtter.get('/:otterId/addFamily/:familyId', (req, res, next) => {
  let otter;
  Otter.findById(req.params.otterId)
    .then((foundOtter) => {
      otter = foundOtter;
      return Family.findById(req.params.familyId); 
    })
    .then((foundFamily) => {
      otter.setFamily(foundFamily);
      res.sendStatus(200);
    })
    .catch(next);
})

// Family Routes

// Required libraries
const routerFamily = require('express').Router();
module.exports = routerFamily;

// Require files
const Family = require('../models/family');

// Routes

routerFamily.post('/add', (req, res, next) => {
  Family.create(req.body)
    .then((createdFamily) => {
      res.status(200).send(createdFamily);
    })
    .catch(next);
})

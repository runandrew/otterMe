// API Router

// Required packages
const express = require('express');

// Required files

// Router creation
const routerAPI = express.Router();
module.exports = routerAPI;

routerAPI.use((req, res, next) => {
  res.send('IN API ROUTER');
});

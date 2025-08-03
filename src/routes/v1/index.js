const express = require('express');
const problemRouter = require('./problem.routes');

const v1Router = express.Router();

v1Router.use('/problems',problemRouter);

// v1Router.get(); 

module.exports = v1Router;
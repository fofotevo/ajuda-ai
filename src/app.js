const path = require('path');
const express = require('express');
const app = express();


const routes = require('./routes');

require('./database/index')
require('dotenv').config();





app.use(routes);


module.exports = app;
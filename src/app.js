const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

require('./database/index');

require('dotenv').config();

// Parser configs.
app.use(bodyParser.text({defaultCharset: 'utf-8'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./routes');

app.use(routes);

module.exports = app;
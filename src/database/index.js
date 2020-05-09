const Sequelize = require('sequelize');
const dbconfig = require('../config/database');

const User = require('../models/User');
const Donor = require('../models/Donor');

const connection = new Sequelize(dbconfig);


User.init(connection);
Donor.init(connection);

module.exports = connection;
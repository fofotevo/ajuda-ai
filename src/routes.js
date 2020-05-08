const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController.js')


// Controllers 

// Routes 

routes.get('/', (req, res) => {
    res.end('Hello Word');
});

routes.post('/user',UserController.create)


module.exports = routes;
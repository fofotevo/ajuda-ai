const express = require('express');
const routes = express.Router();


// Controllers 

// Routes 

routes.get('/', (req, res) => {
    res.end('Hello Word');
});




module.exports = routes;
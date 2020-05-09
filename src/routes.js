const express = require('express');
const router = express.Router();

const UserController = require('./controllers/UserController.js')

router.get('/', (req, res) => {
    res.render('index')
});

router.post('/user', UserController.create);
router.get('/user', UserController.index);
router.delete('/user/:id', UserController.delete);

module.exports = router;
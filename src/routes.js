const express = require('express');
const router = express.Router();

const UserController = require('./controllers/UserController.js')
const DonorController = require('./controllers/DonorController')

router.get('/', (req, res) => {
    res.render('index')
});

router.post('/user', UserController.create);
router.get('/user', UserController.index);
router.delete('/user/:id', UserController.delete);

router.post('/donor', DonorController.create);
router.get('/donor', DonorController.index);
router.delete('/donor/:id', DonorController.delete);

module.exports = router;
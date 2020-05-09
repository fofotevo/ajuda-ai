const express = require('express');
const router = express.Router();

const UserController = require('./controllers/UserController.js')
const DonorController = require('./controllers/DonorController')
const FilterController = require('./controllers/FilterController')

router.get('/', (req, res) => {
    res.render('index')
});

router.get('/ajudar', UserController.index);

router.get('/contato', (req, res) => {
    res.render('contato');
});

router.get('/doar/', FilterController.index);

router.get('/cadastro', (req, res) => {
    res.render('cadastro')
});

router.post('/user', UserController.create);
router.delete('/user/:id', UserController.delete);

router.post('/donor', DonorController.create);
router.get('/donor', DonorController.index);

module.exports = router;
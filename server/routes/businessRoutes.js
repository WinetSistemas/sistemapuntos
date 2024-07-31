const express = require('express');
const router = express.Router();
const businessController = require('../controllers/businessController');

router.post('/register', businessController.register);
router.post('/login', businessController.login);
router.get('/clients', businessController.getClients);
router.post('/add-points', businessController.addPoints);

module.exports = router;
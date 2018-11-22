const express = require('express');

const createController = require('../controllers/create');

const router = express.Router();

router.post('/food', createController.createFood);

module.exports = router;
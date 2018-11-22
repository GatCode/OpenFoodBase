const express = require('express');

const searchController = require('../controllers/search');

const router = express.Router();

router.get('/food/', searchController.searchFood);
router.get('/food/all', searchController.searchAllFood);

module.exports = router;
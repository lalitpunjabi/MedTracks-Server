const express = require('express');
const router = express.Router();
const { getHealthTips } = require('../controllers/healthTips');

router.get('/', getHealthTips);

module.exports = router; 
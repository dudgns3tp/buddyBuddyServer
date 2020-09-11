const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.readAll);
router.get('/count', userController.getAllUserCount);

module.exports = router;

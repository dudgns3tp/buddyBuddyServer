const express = require('express');

const router = express.Router();

router.use('/group', require('./group'));
router.use('/user', require('./user'));

module.exports = router;

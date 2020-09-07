const express = require('express');

const router = express.Router();

router.use('/group', require('./group'));

module.exports = router;

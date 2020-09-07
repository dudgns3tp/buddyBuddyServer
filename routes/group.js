const express = require('express');

const groupController = require('../controllers/groupController');

const router = express.Router();

router.post('/', groupController.create);
router.get('/:id', groupController.readOne);
router.get('/', groupController.readAll);
router.delete('/:id', groupController.deleteOne);
router.post('/:groupId', groupController.joinGroup);

module.exports = router;

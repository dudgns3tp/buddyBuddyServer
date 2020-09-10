const express = require('express');

const groupController = require('../controllers/groupController');

const router = express.Router();

router.get('/all', groupController.allUserByGroup);
router.post('/', groupController.create);
router.get('/:groupId', groupController.readOne);
router.get('/', groupController.readAll);
router.delete('/:groupId', groupController.deleteOne);
router.post('/:groupId', groupController.joinGroup);

module.exports = router;

const express = require('express');
const router = express.Router();
const mentionsController = require('../controllers/clinica');

router.get('/', mentionsController.listMentions);
router.post('/', mentionsController.createMention);

module.exports = router;
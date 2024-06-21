const express = require('express');
const router = express.Router();
const {handleGetQuestion} = require('../controllers/question.controller')
router.get('/', handleGetQuestion);

module.exports = router;

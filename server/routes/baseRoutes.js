const express = require('express');
const router = express.Router();

const passedAway = require('./passedAway.js')

router.use('/passedAway', passedAway);


module.exports = router;

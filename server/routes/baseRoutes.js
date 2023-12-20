const express = require('express');
const router = express.Router();

const passedAway = require('./passedAway.js')
const commitments = require('./commitments.js')

router.use('/passedAway', passedAway);
router.use('/commitments', commitments);


module.exports = router;

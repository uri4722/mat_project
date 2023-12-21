const express = require('express');
const router = express.Router();

const passedAway = require('./passedAway.js')
const commitments = require('./commitments.js')
const storys = require('./storys.js')

router.use('/passedAway', passedAway);
router.use('/commitments', commitments);
router.use('/storys', storys);


module.exports = router;

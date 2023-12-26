const express = require('express');
const router = express.Router();

const passedAway = require('./passedAway.js');
const memorialProfile = require('./memorialProfile.js');
const user = require('./user.js');
const manager = require('./manager.js');
// const commitments = require('./commitments.js')
// const storys = require('./storys.js')

router.use('/passedAway', passedAway);
router.use('/memorialProfile', memorialProfile);
router.use('/user', user)
router.use('/manager', manager);
// router.use('/commitments', commitments);
// router.use('/storys', storys);


module.exports = router;

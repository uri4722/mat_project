const express = require('express');
const { getPassedAwayRecords } = require('../service/service');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const passed_away = await getPassedAwayRecords();
        res.status(200).json(passed_away);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

module.exports = router;
const express = require('express');
const { newPassedAwayService, getPassedAwayService } = require('../service/service');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const passed_away = await getPassedAwayService();
        res.status(200).json(passed_away);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.post('/', async (req, res) => {
    const { body } = req;
    try {
        const res = await newPassedAwayService(body);
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;
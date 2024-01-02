const express = require('express');
const { newPassedAwayService, getPassedAwayService } = require('../service/service');

const router = express.Router();

router.get('/', async (req, res) => {
    console.log("get all passed away");
    try {
        const passed_away = await getPassedAwayService();
        res.status(200).json(passed_away);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})
router.get('/:id', async (req, res) => {
    // console.log("get passed away");
    const { id } = req.params;
    try {
        const passed_away = await getPassedAwayService(id);
        res.status(200).json(passed_away);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

})

router.post('/', async (req, res) => {
    console.log("post passed away");
    const { body } = req;

    try {
        const response = await newPassedAwayService(body);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

module.exports = router;
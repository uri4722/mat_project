const express = require('express');
const { newPassedAwayService, getPassedAwayService, getPassedAwayByYahrzeitService,getNumMmishnaiotService } = require('../service/service');
const {authUser, authRole} = require('../Service/authorization');
const jwt = require('jsonwebtoken');

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
router.get('/yahrzeit', async (req, res) => {
    console.log("get passed away by yahrzeit");
    try {
        const passed_away = await getPassedAwayByYahrzeitService();
        res.status(200).json(passed_away);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

})
router.get('/:id', async (req, res) => {
    console.log("get passed away");
    const { id } = req.params;
    try {
        const passed_away = await getPassedAwayService(id);
        res.status(200).json(passed_away);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

})

router.get('/:id/mishnaiot_calc', async (req, res) => {
    console.log("get mishnaiot_num");
    const { id } = req.params;
    try {
        const num = await getNumMmishnaiotService(id);
        res.status(200).json(num);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

})

router.post('/',authRole("manager"), async (req, res) => {
    console.log("post passed away");
    const { body } = req;
    const token = req.cookies.token;
    const { id } = jwt.verify(token, process.env.JWT_SECRET);
    try {
        const response = await newPassedAwayService(body,id,res);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

module.exports = router;
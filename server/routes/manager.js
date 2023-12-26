const express = require('express');
const { newManagerService, loginManagerService } = require("../service/service");

const router = express.Router();



router.post('/register', async (req, res) => {
    console.log("post manager register");
    const { body } = req;

    try {
        const response = await newManagerService(body);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})
router.post('/login', async (req, res) => {
    console.log("post manager login");
    const { body } = req;

    try {
        const response = await loginManagerService(body);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

module.exports = router;
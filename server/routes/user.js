const express = require('express');
const { newUserService,loginUserService } = require("../service/service");

const router = express.Router();



router.post('/register', async (req, res) => {
    console.log("post user register");
    const { body } = req;

    try {
        const response = await newUserService(body);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.post('/login', async (req, res) => {
    console.log("post user login");
    const { body } = req;

    try {
        const response = await loginUserService(body);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

module.exports = router;
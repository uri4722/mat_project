const express = require('express');
const { newUserService } = require("../service/service");

const router = express.Router();



router.post('/', async (req, res) => {
    console.log("post user");
    const { body } = req;

    try {
        const response = await newUserService(body);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

module.exports = router;
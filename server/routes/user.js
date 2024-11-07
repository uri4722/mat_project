const express = require('express');
const { newUserService,loginUserService, updateUserService } = require("../service/service");

const router = express.Router();



router.post('/register', async (req, res) => {
    console.log("post user register");
    const { body } = req;

    try {
        return response = await newUserService(body,res);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.post('/login', async (req, res) => {
    console.log("post user login");
    const { body } = req;

    try {
        const response = await loginUserService(body,res);
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        
        res.status(500).json({ message: error.message });
    }
})

router.put('/:id', async (req, res) => {
    console.log("put user");
    const { body } = req;
    const { id } = req.params;

    try {
        const response = await updateUserService(body, id);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

module.exports = router;
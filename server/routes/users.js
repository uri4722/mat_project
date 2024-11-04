const express = require('express');
const {  getUsersService} = require("../service/service");
const { authRole } = require('../Service/authorization');

const router = express.Router();

router.get('/',authRole("admin"), async (req, res) => {
    console.log("get all users");
    try {
        const users = await getUsersService();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}   
)

module.exports = router;
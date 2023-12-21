const express = require('express');
const { getStorysService } = require("../service/service");

const router = express.Router();

router.get('/passedAway/:id', async (req, res) => {
    console.log("get storys");
    const { id } = req.params;
    try {
        const storys = await getStorysService(id);
        console.log(storys);
        res.status(200).json(storys);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})


module.exports = router;
const express = require('express');
const { getStoresService } = require("../service/service");

const router = express.Router();

router.get('/passedAway/:id', async (req, res) => {
    console.log("get stores");
    const { id } = req.params;
    try {
        const stores = await getStoresService(id);
        console.log(stores);
        res.status(200).json(stores);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})


module.exports = router;
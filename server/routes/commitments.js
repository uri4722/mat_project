const express = require('express');
const { getCommitmentsService } = require("../service/service");

const router = express.Router();

router.get('/passedAway/:id', async (req, res) => {
    console.log("get commitments");
    const { id } = req.params;
    try {
        const commitments = await getCommitmentsService(id);
        res.status(200).json(commitments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})


module.exports = router;
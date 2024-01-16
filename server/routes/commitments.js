const express = require('express');
const { myCommitmentsService } = require("../service/service");

const router = express.Router();

router.get('/:id', async (req, res) => {
    console.log("get commitments by user");
    const { id } = req.params;
    try {
        const commitments = await myCommitmentsService(id);
        res.status(200).json(commitments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})


module.exports = router;
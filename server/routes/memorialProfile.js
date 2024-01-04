const express = require('express');
const { newMemorialProfileService } = require('../service/service');

const router = express.Router();

router.post('/:id', async (req, res) => {
    console.log("post memorial profile");
    const { id } = req.params;
    const { body } = req;

    try {
        const newStory = await newMemorialProfileService(id, body);
        const response = { story: newStory, masechtot: body.masechtot };
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
})



module.exports = router;
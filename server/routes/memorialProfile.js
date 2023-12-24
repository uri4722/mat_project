const express = require('express');

const router = express.Router();

router.post('/:id', async (req, res) => {
    console.log("post memorial profile");
    const { id } = req.params;
    const { body } = req;

    console.log(id);
    console.log(body);

    try {
        res.status(200).json(body);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})



module.exports = router;
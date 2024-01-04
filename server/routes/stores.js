const express = require('express');
const { deleteStoryService } = require('../service/service');
const router = express.Router();

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const ans = await deleteStoryService(id);
    res.send(ans);
});


module.exports = router;
const express = require('express');
const { newManagerService, loginManagerService, getManagerPassedAwayService,updateManagerService } = require("../service/service");

const router = express.Router();


router.get('/:id/passedAway', async (req, res) => {
    console.log("get all passed away by manager id");
    const { id } = req.params;

    try {
        const managerPassedAway = await getManagerPassedAwayService(id);
        res.status(200).json(managerPassedAway);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

})


router.post('/register', async (req, res) => {
    console.log("post manager register");
    const { body } = req;

    try {
        const response = await newManagerService(body);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})
// router.post('/login', async (req, res) => {
//     console.log("post manager login");
//     const { body } = req;

//     try {
//         const response = await loginManagerService(body);
//         res.status(200).json(response);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// })

router.put('/:id', async (req, res) => {
    console.log("put manager");
    const { body } = req;
    const { id } = req.params;

    try {
        const response = await updateManagerService(body, id);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

module.exports = router;
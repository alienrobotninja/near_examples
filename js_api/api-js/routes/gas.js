const gasRouter = require('express').Router();

let gasController = require('../controllers/gas');

gasRouter.get('/', async (req, res) => {
    const gasResp = (await gasController.gasPrice()).data;
    // console.log("the gas res", gasResp);
    res.json(gasResp);
});

module.exports = gasRouter;
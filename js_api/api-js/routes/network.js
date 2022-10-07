const networkRouter = require('express').Router();

let networkController = require('../controllers/network');

networkRouter.get('/net-info', async (req, res) => {
    const networkInfoResp = (await networkController.networkInfo()).data;
    res.json(networkInfoResp);
});

networkRouter.get("/node-status", async(req, res) => {
    const nodeStatusResp = (await networkController.nodeStatus()).data;
    res.json(nodeStatusResp);
});

networkRouter.get("validation-status", async(req, res) => {
    const validationStatusResp = (await networkController.validationStatus()).data;
    res.json(validationStatusResp); 
});

module.exports = networkRouter;
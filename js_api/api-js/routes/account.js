const accountRouter = require('express').Router();

let accountController = require('../controllers/account');

accountRouter.get('/', async (req, res) => {
    const accountResp = (await accountController.viewAccount()).data;
    // console.log("the account res", accountResp);
    res.json(accountResp);
});

module.exports = accountRouter;
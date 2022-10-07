let accountController = require('../controllers/account');

// an rpc call should return a 200 OK signal
test("the status of an rcp call to the NEAR protocol should return 200", async () => {
    let res = await accountController.viewAccount();
    expect(res.status).toBe(200);
});  
const supertest = require('supertest');
const app = require('../app');

const api = supertest(app);

describe("GET /account endpoints", () => {
    it("should return status 200 Ok", async () => {
        const res = await api.get('/api/v1/account');
        expect(res.status).toEqual(200);

    });

    it("the property result should be returned in body", async () => {
        const res = await api.get('/api/v1/account');
        expect(res.body).toHaveProperty('result');
    });

    it("the data returned in body should be json type", async () => {
        const res = await api.get('/api/v1/account');
        expect(res.type).toEqual(expect.stringContaining('json'));
    });

});


describe("GET /network endpoints", () => {
    it("GET /network/net-info return status 200 Ok", async () => {
        const res = await api.get('/api/v1/network/net-info');
        expect(res.status).toEqual(200);

    });

    it("network info response body should have property active_peers", async () => {
        const res = await api.get('/api/v1/network/net-info');
        expect(res.body.result).toHaveProperty('active_peers');
    });

});


describe("GET /gas price endpoints", () => {
    it("result should have data of the gas price in it", async () => {
        const res = await api.get('/api/v1/gas');
        // console.log(res.body)
        expect(res.body.result.gas_price).toBeDefined();
    });
});

describe("GET /non-existent router should return a 404", () => {
    it("a call to /non-existent should not return any valid data", async () => {
        const res = await api.get('/api/v1/non-existent');
        expect(res.status).toBe(404);
    });
});


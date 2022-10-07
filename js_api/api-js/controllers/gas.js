const axios = require('axios');

// the controller to get the data from the rpc func calls 

const BaseUrl = "https://rpc.testnet.near.org";

//this rpc uses [null] and will return the gas price for the most recent block 
const gasPrice = async () => {
    const JSONParams = {
        "jsonrpc": "2.0",
        "id": "dontcare",
        "method": "gas_price",
        "params": [null]
    };

    try {
        const axiosRes = await axios.post(BaseUrl, JSONParams);
        // console.log("result for latest gas price-> ", axiosRes.data);
        return axiosRes;
    } catch (err) {
        console.error("error getting gas price ->", err);
    }
}

module.exports = {
    gasPrice
};

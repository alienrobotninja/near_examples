const axios = require('axios');

// the controller to get the data from the rpc func calls 

const BaseUrl = "https://rpc.testnet.near.org";

const viewAccount = async () => {
    const JSONParams =
    {
        "jsonrpc": "2.0",
        "id": "dontcare",
        "method": "query",
        "params": {
            "request_type": "view_account",
            "finality": "final",
            "account_id": "nearkat.testnet"
        }
    };

    try {
        const axiosRes = await axios.post(BaseUrl, JSONParams);
        // console.log("this is the axios result -> ", axiosRes.data);
        return axiosRes;
    } catch (err) {
        console.error("error getting the account info ->", err);
    }
}

module.exports = {
    viewAccount,
}
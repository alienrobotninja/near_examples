const axios = require('axios');

// the controller to get the data from the rpc func calls 

const BaseUrl = "https://rpc.testnet.near.org";

const networkInfo = async () => {
    const JSONParams =
    {
        "jsonrpc": "2.0",
        "id": "dontcare",
        "method": "network_info",
        "params": []
    };

    try {
        const axiosRes = await axios.post(BaseUrl, JSONParams);
        // console.log("result for network info -> ", axiosRes.data);
        return axiosRes;
    } catch (err) {
        console.error("error getting the network info ->", err);
    }
}

const nodeStatus = async () => {
    const JSONParams =
    {
        "jsonrpc": "2.0",
        "id": "dontcare",
        "method": "status",
        "params": []
    };

    try {
        const axiosRes = await axios.post(BaseUrl, JSONParams);
        // console.log("result for node status -> ", axiosRes.data);
        return axiosRes;
    } catch (err) {
        console.error("error getting the node status ->", err);
    }
}

const validationStatus = async () => {
    const JSONParams = {
        "jsonrpc": "2.0",
        "id": "dontcare",
        "method": "validators",
        "params": [null]
    };

    try {
        const axiosRes = await axios.post(BaseUrl, JSONParams);
        // console.log("validation status for the latest block  -> ", axiosRes.data);
        return axiosRes;
    } catch (err) {
        console.error("error getting validation status for the latest block ->", err);
    }
}


module.exports = {
    networkInfo,
    nodeStatus,
    validationStatus,
}
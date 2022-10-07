// import * as nearAPI from "near-api-js";
//
// const { connect, keyStores, WalletConnection } = nearAPI;
//
// const keyStore = new keyStores.BrowserLocalStorageKeyStore();
//
//
// const config = {
//     networkId: "testnet",
//     keyStore: new keyStores.BrowserLocalStorageKeyStore(),
//     nodeUrl: "https://rpc.testnet.near.org",
//     walletUrl: "https://wallet.testnet.near.org",
//     helperUrl: "https://helper.testnet.near.org",
//     explorerUrl: "https://explorer.testnet.near.org",
// };
//
// // connect to NEAR
//
// const near = await connect(config);
// const account = await near.account("example-account.testnet");
//
// account.createAndDeployContract()
//
// // create wallet connection
// const wallet = new WalletConnection(near);
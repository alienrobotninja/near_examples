// import fs from "fs";
import api from "./api";
import {utils, keyStores, connect } from 'near-api-js';
import nearSeedPhrase from "near-seed-phrase"


// const settings = JSON.parse(fs.readFileSync(api.CONFIG_PATH, 'utf8'));
//
// export async function mintNft(tokenId, metadata, contractAccountId, account_id, private_key) {
//     const nftContract = contractAccountId ? contractAccountId : settings.nft_contract;
//
//     let account = !(account_id && private_key)
//         ? await getMasterAccount()
//         : await GetAccountByKey(account_id, private_key);
//
//     try {
//         const tx = await account.functionCall(
//             nftContract,
//             "nft_mint",
//             {
//                 "token_id": tokenId,
//                 "metadata": metadata
//             },
//             '100000000000000',
//             '10000000000000000000000');
//
//         if (!tx.status.Failure)
//             return tx.transaction.hash
//     } catch (e) {
//         return api.reject(e);
//     }
// }

//  async function getMasterAccount() {
//     try {
//         const keyPair = utils.KeyPair.fromString(settings.master_key);
//         const keyStore = new keyStores.InMemoryKeyStore();
//         keyStore.setKey("default", settings.master_account_id, keyPair);
//
//         const near = await connect({
//             networkId: "default",
//             deps: {keyStore},
//             masterAccount: settings.master_account_id,
//             nodeUrl: settings.rpc_node
//         });
//
//         return await near.account(settings.master_account_id);
//     } catch (e) {
//         return api.reject(e);
//     }
// }

 export async function GetAccountByKey(account_id, seedPhrase) {

    let rpc_node = "https://rpc.testnet.near.org"
     let network = "testnet"
    let private_key = nearSeedPhrase.parseSeedPhrase(seedPhrase)
    try {
        // private_key = private_key.replace('"', '');

        const keyPair = utils.KeyPair.fromString(private_key.secretKey);
        console.log(private_key.secretKey)
        const keyStore = new keyStores.InMemoryKeyStore();
        await keyStore.setKey(network, account_id, keyPair);

        const near = await connect({
            networkId: "default",
            deps: {keyStore},
            masterAccount: account_id,
            nodeUrl: rpc_node
        });

        return await near.account(account_id);
    } catch (e) {
        return api.reject(e);
    }

    // async function getKeyFroSeedPhrase(seedPhrase){
    //     return nearSeedPhrase.parseSeedPhrase(seedPhrase)
    // }
}
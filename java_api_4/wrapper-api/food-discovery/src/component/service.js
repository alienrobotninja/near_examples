import api from "./api";
import {utils, keyStores, connect } from 'near-api-js';
import nearSeedPhrase from "near-seed-phrase"

export async function GetAccountByKey(account_id, seedPhrase) {

    let rpc_node = "https://rpc.testnet.near.org"
     let network = "testnet"
    let private_key = nearSeedPhrase.parseSeedPhrase(seedPhrase)
    try {
        // private_key = private_key.replace('"', '');

        const keyPair = utils.KeyPair.fromString(private_key.secretKey);
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

}
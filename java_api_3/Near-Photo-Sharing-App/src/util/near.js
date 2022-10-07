import enviroment from './config'
import { connect, Contract, keyStores, WalletConnection } from "near-api-js";
import { formatNearAmount } from "near-api-js/lib/utils/format";

// const nearenv = enviroment("testnet");

export async function set_contract(){
    const nearapi = await connect(
        Object.assign (
            {deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() }},
            "http://localhost:3000"
        )
    );

    window.walletConnection = new WalletConnection("http://localhost:3000")
    window.accountId = window.walletConnection.getAccountId();

    window.contract = new Contract(
        window.walletConnection.account(),
        nearenv.contractName, {
            viewMethods: ["getPictures", "getAllPictures"],
            changeMethods: ["upload_picture"]
        }
    )
}

export async function accountBalance(){
    return formatNearAmount(
        await window.walletConnection.account().getAccountBalance().total, 2
    )
}
export async function getAccountId(){
    return window.walletConnection.getAccountId();
}

export function login(){
    window.walletConnection.requestSignIn(nearenv.contractName);
}

export function logout(){
    window.walletConnection.signOut();
    window.location.reload();
}
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import {utils, keyStores, connect } from 'near-api-js';
import nearSeedPhrase from 'near-seed-phrase'
// import bip39 from "bip39";

function App() {
  const [account, setAccount] = useState({})
  // const getKeyPair = (seedPhrase) => {
  //   return bip39.mnemonicToSeedSync(seedPhrase).slice(0, 32);
  // }


  useEffect(() => {
    const getAccount = async (account_id, seedPhrase) => {
      let private_key = nearSeedPhrase.parseSeedPhrase(seedPhrase);
      console.log(private_key)
      try {
        let network = "testnet";
        let rpc_node = "https://rpc.testnet.near.org"

        // private_key = private_key.secretKey.replace('"', '');

        const keyPair = utils.KeyPair.fromString(private_key.secretKey);
        const keyStore = new keyStores.InMemoryKeyStore();
        await keyStore.setKey(network, account_id, keyPair);

        const near = await connect({
          networkId: network,
          deps: {keyStore},
          masterAccount: account_id,
          nodeUrl: rpc_node,
          // headers: (typeof this.headers !== undefined) ? this.headers : {}
        });

        const acct = await near.account(account_id);
        console.log(acct)
        setAccount(acct)
      } catch (e) {
        console.log("An error occured", e.message);
      }
    }

    getAccount("janet12.testnet", "true envelope letter aware marble saddle flush laundry where donkey deal explain")
  }, [])

  useEffect(
      () =>{

      }, []
  )

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
  );
}

export default App;


import React, { useEffect, useCallback, useState } from "react";
import { Container, Nav } from "react-bootstrap";
import { login, logout as destroy, accountBalance } from "./util/near";
import Wallet from "./component/wallet";
import { Notification } from "./component/utils/notifications";
import Cover from "./component/utils/cover";
import coverImg from "./assets/Oculus.png";
import "./App.css";


const App = function AppWrapper() {
  const account = window.walletConnection.account();

  const [balance, setBalance] = useState("0");

  const getBalance = useCallback(async () => {
    if (account.accountId) {
      setBalance(await accountBalance());
    }
  });

  useEffect(() => {
    getBalance();
  }, [getBalance]);

  return (
    <>
      <Notification />
      {account.accountId ? (
        <Container fluid="md">
          <Nav className="justify-content-end pt-3 pb-5">
            <Nav.Item>
              <Wallet
                address={account.accountId}
                amount={balance}
                symbol="NEAR"
                destroy={destroy}
              />
            </Nav.Item>
          </Nav>
          <main>
            <Memes />
          </main>
        </Container>
      ) : (
        <Cover name="Photo-Sharing App" login={login} coverImg={coverImg} />
      )}
    </>
  );
};

export default App;
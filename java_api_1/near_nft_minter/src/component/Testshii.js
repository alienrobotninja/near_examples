import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Card, Container, Row, Alert } from "react-bootstrap";
import { keys } from "regenerator-runtime";
const BN = require("bn.js");

const Testshii = (props) => {
    const mintNFT = async () => {
        await window.contract.nft_mint(
            {
                token_id: `${window.accountId}-go-team-token`,
                metadata: {
                    title: "CommandLine Team NFT",
                    description: "The Team that goes near with NEAR Blockchain :)",
                    media:
                        "https://bafybeigolztv64z3fcfu55sowyboutqqtmldzh5ugdaqg2iqh7jrzzxjdu.ipfs.nftstorage.link/",
                },
                receiver_id: window.accountId,
            },
            300000000000000, // attached GAS (optional)
            new BN("1000000000000000000000000")
        );
    };

    return (
        <Card style={{ padding: "2vh" }}>
            <Container>
                <Row style={{ marginBottom: "2vh" }}>
                    <p>
                        Step 2: After you have logged in, hit this button to mint your "Go
                        Team" Token and go your{" "}
                        <a href='https://wallet.testnet.near.org/'> wallet</a> and see your
                        NFT
                    </p>
                </Row>
                <Row className='d-flex justify-content-center'>
                    <Button
                        disabled={props.userNFTStatus || window.accountId === ""}
                        onClick={mintNFT}
                        style={{ width: "50vw" }}
                    >
                        Mint NFT
                    </Button>
                </Row>
                <Row className='d-flex justify-content-center'>
                    {console.log(props.userNFTStatus)}
                    {props.userNFTStatus ? (
                        <Alert variant='danger' style={{ marginTop: "2vh" }}>
                            <p style={{ textAlign: "center" }}>
                                You have an NFT already in this wallet. You can see it{" "}
                                <a href={"https://wallet.testnet.near.org/?tab=collectibles"}>
                                    here!
                                </a>
                                :)
                            </p>
                        </Alert>
                    ) : null}
                </Row>
            </Container>
        </Card>
    );
};

Testshii.propTypes = {};

export default Testshii;
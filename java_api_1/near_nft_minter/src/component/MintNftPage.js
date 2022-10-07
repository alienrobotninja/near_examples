import React, {useState} from 'react';
import {Button, Grid, Stack, TextField} from "@mui/material";
import {create} from "ipfs-http-client";

import {useNavigate} from "react-router-dom";
import {useFormik} from "formik";
import api from "../service/api";
import { Contract } from 'near-api-js';

const MintNftPage = () => {

    const [fileUrl, updateFileUrl] = useState(``)


    const navigate = useNavigate();

    const client = create('https://ipfs.infura.io:5001/api/v0')
    async function onChange(e) {
        const file = e.target.files[0]
        try {
            const added = await client.add(file)
            const url = `https://ipfs.infura.io/ipfs/${added.path}`
            updateFileUrl(url)
            console.log(fileUrl)
        } catch (error) {
            console.log('Error uploading file: ', error)
        }
    }


    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
        },



        onSubmit: async (values) => {
            console.log("values ::::: ", values)
            const account = JSON.parse(localStorage.getItem("account"))
            const Metadata = {
                "title": formik.values.title,
                "description": formik.values.description,
                "media": fileUrl,
            }
            const contract = await new Contract(
                account,
                "nft-frontend-simple-mint.blockhead.testnet",
                {
                    viewMethods: ["check_token"],
                    changeMethods: ["nft_mint"],
                }
            );

            console.log(account)
            mintNFT(contract, Metadata, account).then(r => console.log(r))
            console.log("I reached here")
            alert(JSON.stringify(values, null, 2));
        },


    });



    const mintNFT = async (contract, metadata, account) => {
        try {
            const tx = await contract.nft_mint(
                {
                    token_id:  account.accountId,
                    metadata:  metadata,
                    receiver_id: account.accountId,
                },

                '100000000000000',
                '10000000000000000000000');

            if (!tx.status.Failure)
                return tx.transaction.hash
        } catch (e) {
            return api.reject(e);
        }
    };

    return (
        <Stack
        direction="column"
        >
            <div className="dropZoneContainer">
                <input type="file" id="contained-button-file" className="FileUpload" accept=".jpg,.png,.gif"
                       onChange={onChange}  style={{ opacity: 0}} />
                <label htmlFor="contained-button-file">
                    <Button variant="contained" color="primary" component="span">
                        Upload Photo
                    </Button>
                </label>
            </div>

            <form onSubmit={formik.handleSubmit}>
                <Grid container marginTop={10} >
                    <Grid Item lg={12}>
                        <TextField
                            error={formik.touched.title && Boolean(formik.errors.title)}
                            helperText={formik.touched.title && formik.errors.title}
                            fullWidth
                            id="title"
                            name="title"
                            label="Title"
                            onChange={formik.handleChange}
                            value={formik.values.title}
                        >

                        </TextField>
                    </Grid>
                    <Grid Item lg={12} marginTop={5}>
                        <TextField
                            error={formik.touched.description && Boolean(formik.errors.description)}
                            helperText={formik.touched.description && formik.errors.description}
                            fullWidth
                            height="3rem"
                            id="description"
                            multiline
                            name="description"
                            label="Description"
                            variant="outlined"
                            onChange={formik.handleChange}
                            value={formik.values.description}
                        >
                        </TextField>
                    </Grid>
                    <Grid item lg={12} marginTop={5}>
                        <Button variant="contained" fullWidth type="submit" sx={{
                            background: "#000", height: 60,
                            ":hover": {
                                background: "#fff",
                                color: "#000"
                            }
                        }}>
                            Proceed to Mint
                        </Button>
                    </Grid>
                </Grid>
            </form >
        </Stack>
    );
};

export default MintNftPage;
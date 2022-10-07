import React from 'react';
import {Button, Container, Grid, Stack, TextField} from "@mui/material";
import {useFormik} from "formik";
import {GetAccountByKey} from "../service/MintService";
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

    const formik = useFormik({
        initialValues: {
            accountId: "",
            seedPhrase: "",
        },
        onSubmit: (values) => {
            GetAccountByKey(values.accountId, values.seedPhrase).then(res => {
                console.log(res)
                localStorage.setItem("account", JSON.stringify(res))
            })
        }
    });

    const navigate = useNavigate();

    return (
        <Stack
               justifyContent="center"
               direction="column"
               alignItems="center"
               paddingTop="10rem"
               width="40rem"
               marginLeft="37rem"
        >
            <Container>
            <form onSubmit={formik.handleSubmit}>
                <Grid container marginTop={10}>
                    <Grid Item lg={12}>
                        <TextField
                            fullWidth
                            id="outlined-basic"
                            variant="outlined"
                            id="accountId"
                            value={formik.values.accountId}
                            onChange={formik.handleChange}
                            label="Account Id"
                            name="accountId"
                            type="accountId"
                            placeholder="Enter Account Id"
                            error={
                                formik.touched.accountId && Boolean(formik.errors.accountId)
                            }
                            helperText={formik.touched.accountId && formik.errors.accountId}
                        />
                    </Grid>
                    <Grid Grid item lg={12} marginTop={5}>
                        <TextField
                            fullWidth
                            id="outlined-basic"
                            variant="outlined"
                            id="seedPhrase"
                            value={formik.values.seedPhrase}
                            onChange={formik.handleChange}
                            name="seedPhrase"
                            label="Seed Phrase"
                            type="seedPhrase"
                            placeholder="Enter Seed Phrase"
                        />
                    </Grid>
                    <Grid  item lg={12} marginTop={5}>
                        <Button
                            variant="contained"
                            fullWidth
                            type="submit"
                            sx={{ background: "#6E8264", height: 60 }}
                        >
                            Login
                            </Button>
                    </Grid>
                </Grid>

            </form>

            </Container>
        </Stack>
    );
};

export default LoginPage;
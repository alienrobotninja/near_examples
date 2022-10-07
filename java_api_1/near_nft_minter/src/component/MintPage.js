import React, {useState} from 'react';
import {
    Box,
    Button,
    Grid, Paper,
    Stack,
    Step,
    StepContent,
    StepLabel,
    Stepper,
    TextField,
    Typography
} from "@mui/material";
import { useFormik } from "formik";
import { create } from 'ipfs-http-client'
import { useNavigate } from 'react-router-dom';
import api from "../service/api";


const MintPage = () => {
    const [fileUrl, updateFileUrl] = useState(``)


    const navigate = useNavigate();

   const Upload = () => {

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

       return (
           <div className="dropZoneContainer">
               <input type="file" id="contained-button-file" className="FileUpload" accept=".jpg,.png,.gif"
                      onChange={onChange}  style={{ opacity: 0}} />
               <label htmlFor="contained-button-file">
                   <Button variant="contained" color="primary" component="span">
                       Upload Photo
                   </Button>
               </label>
           </div>
       );
   };

   const ImageForm =  () => {
       const formik = useFormik({
           initialValues: {
               title: '',
               description: '',
               fileUrl: fileUrl

           },
           onSubmit: (values) => {
               console.log("values ::::: ", values)
               const account = JSON.parse(localStorage.getItem("account"))
               mintNFT(values, account).then(r => console.log(r))
               console.log("I reached here")
               alert(JSON.stringify(values, null, 2));
           },


       });

       const mintNFT = async (metadata, account) => {
           try {
               const tx = await account.functionCall(
                   account.accountId,
                   "nft_mint",
                   {
                       "token_id": `${account.accountId }-token`,
                       "metadata": metadata
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
           <form onSubmit={formik.handleSubmit, handleNext}>
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
       );
   };


    const steps = [
        {
            label: 'Upload An Image',
            description: <Upload />,
        },
        {
            label: 'Enter Image Details',
            description: <ImageForm/>,
        },
        {
            label: 'Congratulations',
            description: `You have successfully created an NFT`,
        },
    ];

    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    return (
        <Grid container justifyContent="center" direction="column" alignItems="center">
            <Stack textAlign="center" marginTop={10}>
                <Typography fontSize="86px" fontWeight="700" lineHeight="105px" color="#eee">
                    Mint NFT
                </Typography>
            </Stack>
            {/* stepper */}
            <>

                <Box sx={{ maxWidth: 400 }}>
                    <Stepper activeStep={activeStep} orientation="vertical">
                        {steps.map((step, index) => (
                            <Step key={step.label}>
                                <StepLabel
                                    optional={
                                        index === 2 ? (
                                            <Typography variant="caption">Last step</Typography>
                                        ) : null
                                    }
                                >
                                    {step.label}
                                </StepLabel>
                                <StepContent>
                                    <Typography>{step.description}</Typography>
                                    <Box sx={{ mb: 2 }}>
                                        <div>
                                            <Button
                                                variant="contained"
                                                onClick={handleNext}
                                                sx={{ mt: 1, mr: 1 }}
                                            >
                                                {index === steps.length - 1 ? 'Finish'  : 'Continue'}
                                            </Button>
                                            <Button
                                                disabled={index === 0}
                                                onClick={handleBack}
                                                sx={{ mt: 1, mr: 1 }}
                                            >
                                                Back
                                            </Button>
                                        </div>
                                    </Box>
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length && (
                        <Paper square elevation={0} sx={{ p: 3 }}>
                            <Typography>All steps completed - you&apos;re finished</Typography>
                            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                                Reset
                            </Button>
                        </Paper>
                    )}
                </Box>


            </>

        </Grid>

    );
};

export default MintPage;
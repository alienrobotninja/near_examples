import React from "react";
import { useFormik } from "formik";
import {
  Container,
  TextField,
  Button,
  Grid,
  Typography,
  Stack,
  Link,
  Box,
} from "@mui/material";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Box bgcolor="#ECE5E5" height="63rem" marginTop="-8rem">
      <Container>
        <Stack
          justifyContent="center"
          direction="column"
          alignItems="center"
          paddingTop="10rem"
        >
          <Stack textAlign="center" marginTop={10}>
            <Typography
              fontSize="50px"
              fontWeight="700"
              lineHeight="105px"
              color="#000"
            >
              Log In
            </Typography>
            <Stack direction="row" marginTop={3}>
              <Typography
                fontWeight="400"
                color="rgba(0, 0, 0, 0.5)"
                fontSize="18px"
              >
                Don't have an account ? &nbsp;
              </Typography>
              <Link
                sx={{ textDecoration: "none", cursor: "pointer" }}
                onClick={() => navigate("/register")}
              >
                <Typography fontWeight="400" color="#000" fontSize="18px">
                  Sign Up
                </Typography>
              </Link>
            </Stack>
          </Stack>
          <form onSubmit={formik.handleSubmit}>
            <Grid container marginTop={10}>
              <Grid Item lg={12}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  variant="outlined"
                  id="email"
                  name="email"
                  label="Email"
                  placeholder="enter email address (ex. mail@send.com)"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item lg={12} marginTop={5}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  variant="outlined"
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  placeholder="enter password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Grid>
              <Grid item lg={12} marginTop={5}>
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
        </Stack>
      </Container>
    </Box>
  );
};

export default Login;

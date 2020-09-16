import React from "react";
import {
    TextField,
    Button,
    Box,
    Typography,
    makeStyles,
    withStyles,
    styled
} from "@material-ui/core";
import { LockOpenTwoTone } from "@material-ui/icons";
import { purple } from "@material-ui/core/colors";
import { Formik } from "formik";
import Logo from "src/components/Logo";
import * as Yup from "yup"
import theme from "src/theme";


const useStyles = makeStyles({
    root: {},
    cardBox: {
        display: "flex",
        flexDirection: "column",
        width: "420px",
        margin: "1em"
    },
    silabel: {
        margin: "1em",
        marginTop: "3em",
        display: "flex",
        justifyContent: "center"
    },
    sn: {
        fontWeight: "700",
    }

})

const MySecButton = styled(Button)({
    background: 'radial-gradient(#7986cb,#5c6bc0);',
    border: 0,
    borderRadius: 2,
    color: 'white',
    height: 32,
    padding: '0 30px',
    marginTop: "2rem"
  });
const MyButton = styled(Button)({
    background: 'radial-gradient(#546e7a,#455a64);',
    border: 0,
    borderRadius: 2,
    color: 'white',
    height: 42,
    padding: '0 30px',
    marginTop: "2rem"
  });

const LoginCard = () => {

    const classes = useStyles()
    const onLogin = ({ values }) => {
        console.log(values)
    }

    return (
        <Box
            className={classes.root}
        >
            <Logo />
            <Box
                className={classes.silabel}
            >
                <LockOpenTwoTone
                    color="textPrimary"
                />
                <Box
                    ml={2}
                >
                    <Typography
                        color="primaryMain"
                        variant="h4"
                    >
                        <Box
                            className={classes.sn}
                        >
                            Sign In to Student Portal
                    </Box>
                    </Typography>
                </Box>
            </Box>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                onSubmit={onLogin}

            >
                {({
                    handleSubmit,
                    handleBlur,
                    handleChange,
                    errors,
                    values,
                    touched,
                    ...rest
                }) => {
                    return (
                        <Box

                            className={classes.cardBox}
                        >
                            <TextField
                                error={errors.email && touched.email}
                                name="email"
                                label="Email"
                                value={values.email}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                variant="standard"
                                margin="normal"
                            />
                            <TextField
                                error={errors.password && touched.password}
                                name="password"
                                label="Password"
                                value={values.password}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                variant="standard"
                                margin="normal"
                            />
                            <Box
                                mt={4}
                            >
                                <MyButton
                                    type="submit"
                                    fullWidth
                                    /* variant="contained"
                                    size="large"
                                    color="primary" */
                                >
                                    <Typography
                                        variant="button"
                                        display="block"
                                        gutterBottom
                                    >
                                        <strong>Login</strong>
                                    </Typography>
                                </MyButton>
                            </Box>
                            <Box
                                display={"flex"}
                                justifyContent="center"
                                marginTop="auto"
                            >
                                <MySecButton
                                    type="button"
                                    fullWidth={false}
                                    /* variant="contained"
                                    size="large"
                                    color="secondary" */
                                >
                                    <strong>Sign Up</strong>
                                </MySecButton>
                            </Box>
                        </Box>
                    )
                }

                }
            </Formik>
        </Box>
    )
}

export default LoginCard
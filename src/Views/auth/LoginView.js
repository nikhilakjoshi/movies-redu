import React from "react"
import Page from "src/components/Page";
import { 
    Box,
    makeStyles
 } from "@material-ui/core";
 import LoginCard from "./LoginCard";
 import theme from "src/theme"

const useStyles = makeStyles({
    root:{
        display: "flex",
        height: "100%"
    },
    loginCard: {
        marginLeft: "auto",
        [theme.breakpoints.down('sm')]: {
            margin: "1rem"
        },
        display: "flex",
        backgroundColor: theme.palette.background.paper,
        // boxShadow: theme.shadows[25]
    },
    container: {
        marginTop: "1rem",
        marginBottom: "auto"
    }
})

const LoginView = () => {
    const classes = useStyles()
    return(
        <Page
            title={"Login"}
        >
            <Box
                className={classes.root}
            >
                <Box
                    className={classes.loginCard}
                >
                    <Box
                        className={classes.container}
                    >
                        <LoginCard/>
                    </Box>
                </Box>
            </Box>
        </Page>
    )
}

export default LoginView
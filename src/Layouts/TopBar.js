import React from "react"
import { AppBar, Toolbar, makeStyles, IconButton } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import theme from "src/theme"

const useStyles = makeStyles({
    root: {
        backgroundColor: theme.palette.background.paper,
        height: "64px",
        padding: theme.spacing(2),
    },
})

const TopBar = () => {

    const classes = useStyles()

    return(
        <AppBar
            elevation={0}
        >
            <Toolbar>
                <IconButton>
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default TopBar
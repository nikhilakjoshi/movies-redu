import React from "react";
import { Outlet } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import theme from "src/theme";
import TopBar from "./TopBar";

const useStyles = makeStyles({
    root: {
        backgroundColor: theme.palette.background.dark,
        display: 'flex',
        height: '100%',
        overflow: 'hidden',
        width: '100%',
      },
      wrapper: {
        display: 'flex',
        flex: '1 1 auto',
        overflow: 'hidden',
        paddingTop: 64,
        /* [theme.breakpoints.up('lg')]: {
            paddingLeft: 200
        } */
    },
    contentContainer: {
        display: 'flex',
        flex: '1 1 auto',
        overflow: 'hidden'
    },
    content: {
        flex: '1 1 auto',
        height: '100%',
        overflow: 'auto'
    }
})

const MainLayout = () => {
    const classes = useStyles()
    
    return (
        <div className={classes.root}>
          <TopBar />
          <div className={classes.wrapper}>
            <div className={classes.contentContainer}>
              <div className={classes.content}>
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      );
}

export default MainLayout
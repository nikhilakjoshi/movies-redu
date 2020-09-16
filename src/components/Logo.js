import React from 'react';
import { makeStyles, Typography, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  logo:{
    height:120,
    width:150,
    marginLeft: "auto",
    marginRight: "auto"
  },
}));

const Logo = (props) => {
  const classes = useStyles();
  return (
    <Box display="flex" >
      <img
        alt="Logo"
        src="/static/hogwards-logo.png"
        className={classes.logo}
        {...props}
        />
    </Box>
  );
};

export default Logo;
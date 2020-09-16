import React, { forwardRef } from "react"
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    aboveHelmet: {
        height: "100%",
        width: "100%"
    } 
})

const Page = forwardRef(({
    children,
    title = '',
    ...rest
},ref) => {

    const classes = useStyles()

    return(
        <div
            ref={ref}
            {...rest}
            className={classes.aboveHelmet}
        >
            <Helmet>
                <title>School Web - {title}</title>
            </Helmet>
            {children}
        </div>
    )
})

Page.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string
}

export default Page
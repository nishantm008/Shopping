import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import AppBar from './AppBar'
import shopping1 from '../assets/shopping1.jpg';
import { Typography, Grid } from '@material-ui/core';
import Footer from './Footer';
import Products from "./Products";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: "100%",
    },
    drawerGrid: {
        backgroundColor: "#89279E",
        marginBottom: "34px",
        '& .MuiButton-text': {
            transform: "matrix(0, -1, 1, 0, 0, 0)",
            color: "#ffffff",
            size: "medium",
            textTransform: "none",
            '&:focus': {
                textDecoration: "underline solid #ffffff 3px ",
            }
        }
    },
    logoText: {
        font: "normal normal normal 100px/130px Curlz MT",
        color: "#FFFFFF",
        marginLeft: "80px",
    },
    logominiText: {
        font: "normal normal normal 30px/5px Curlz MT",
        color: "#FFFFFF",
        marginLeft: "150px",
    },
    line: {
        width: "365px",
        height: "50px",
        marginLeft: "115px",
        marginTop: "80px",
        backgroundColor: "#ffffff",
    },
    quoteText: {
        marginLeft: "110px",
        font: "normal normal normal 20px/27px Gigi",
        color: "#FFFFFF",
    },
}));

export default function Shoopinghome(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar />
            <Grid container>
                <Grid className={classes.drawerGrid} item xs={3}>
                    <Typography className={classes.logoText}>Divine</Typography>
                    <Typography className={classes.logominiText}>Explore</Typography>
                    <div className={classes.line}></div>
                    <Typography style={{
                        font: "normal normal 10 80px/40px Perpetua Titling MT",
                        transform: "matrix(-1, 0, 0, -1, -350, -20)",
                        color: "#FFFFFF",
                        opacity: "0.39"
                    }}>"</Typography>
                    <Typography className={classes.quoteText}>Fashion is what you are offered four times a
                year by designers and style is what you choose!</Typography>
                    <Typography style={{
                        font: "normal normal 10 80px/40px Perpetua Titling MT",
                        transform: "matrix(1, 0, 0, 1, 170, 0)",
                        color: "#FFFFFF",
                        opacity: "0.39"
                    }}>"</Typography>
                    <Grid container>
                        <img src={shopping1} style={{
                            height: "290px",
                            width: "390px",
                            marginLeft: "190px",
                            marginTop: "80px",
                        }}
                            alt="lady with bag" />
                    </Grid>
                </Grid>
                <Grid item xs={9}>
                   <Products />
                </Grid>
            </Grid>
            <Footer />
        </div>
    )
}
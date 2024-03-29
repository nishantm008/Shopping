import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from './AppBar'
import { Typography, Button, Tabs, Tab } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import shopping1 from '../assets/shopping1.jpg';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { useHistory } from 'react-router';
import upArrow from '../assets/upArrow.svg';
import downArrow from '../assets/downArrow.svg';
import Footer from './Footer';

const StyledTabs = withStyles({
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& > span': {
            maxWidth: 40,
            width: '100%',
            backgroundColor: '#89279E'
        },
    },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles(() => ({
    root: {
        textTransform: 'none',
        color: '#000000',
        font: "normal normal medium 20px/22px Franklin Gothic",
        '&:focus': {
            opacity: 1,
        },
    },
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: "100%",
        height: "937px"
    },
    drawerGrid: {
        backgroundColor: "#89279E",
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
    appBar: {
        position: 'relative',
        zIndex: 1400,
        backgroundColor: "#89279E"
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
    menuButton: {
        marginRight: theme.spacing(2),
    },
    list: {
        width: 350,
        color: "#89279E"
    },
    log: {
        position: 'absolute',
        bottom: theme.spacing(1),
        left: theme.spacing(15),
    },
    line: {
        width: "365px",
        height: "50px",
        marginLeft: "115px",
        marginTop: "80px",
        backgroundColor: "#ffffff",
    },
    lineTwo: {
        width: "320px",
        height: "50px",
        marginLeft: "20px",
        marginTop: "230px",
        backgroundColor: "#89279E",
    },
    lineThree: {
        width: "20px",
        height: "50px",
        marginTop: "230px",
        marginLeft: "120px",
        backgroundColor: "#89279E",
    },
    quoteText: {
        marginLeft: "110px",
        font: "normal normal normal 20px/27px Gigi",
        color: "#FFFFFF",
    },
    tabText: {
        transform: "matrix(0, -1, 1, 0, 0, 325)",
        font: "normal normal normal 50px/50px Broadway",
        color: "#707070",
        opacity: 0.11,
    },
    socialButoons: {
        marginTop: "200px",
        marginLeft: "430px",
        font: "normal normal normal 50px/75px Broadway",
    },
    webQuote: {
        marginLeft: "76px",
        marginTop: "-170px",
        font: "normal normal normal 40px/45px Franklin Gothic",
    },
    productButton: {
        position: 'absolute',
        top: theme.spacing(12),
        left: theme.spacing(15),
    }
}));

export default function Home() {
    const classes = useStyles();
    const history = useHistory()
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const onProductClick =() => {
        history.push('/shop')
    }
  
    return (
        <Grid container className={classes.root}>
            <Grid className={classes.drawerGrid} item xs={3}>
                 <AppBar value="Products" buttonClick={onProductClick} />
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
                    <Grid item xs={2}>
                        <Button variant="text">Spring</Button><br></br>
                        <Button variant="text" style={{ marginTop: "80px", }}>Winter</Button>
                        <Button variant="text" style={{ marginTop: "80px", }}>Autumn</Button>
                        <Button variant="text" style={{ marginTop: "80px", }}>Summer</Button>
                    </Grid>
                    <Grid item xs={1}>
                        <img src={upArrow} style={{ marginTop: "235px" }} alt="" /><br></br>
                        <img src={downArrow} style={{ marginTop: "80px" }} alt="" />
                    </Grid>
                    <Grid item xs={1}>
                        <img src={shopping1} style={{
                            height: "290px",
                            width: "390px",
                            marginLeft: "190px",
                            marginTop: "80px",
                        }}
                            alt="lady with bag" />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={9}>
                <StyledTabs
                    value={value}
                    onChange={handleChange}
                    style={{
                        marginLeft: "800px",
                    }}
                >
                    <StyledTab label="TRENDING" />
                    <StyledTab label="COLLECTIONS" />
                    <StyledTab label="SHOWS" />
                    <StyledTab label="WARDROBE" />
                </StyledTabs >
                <Grid container>
                    <Grid item xs={2}>
                        <div className={classes.lineTwo}></div>
                    </Grid>
                    <Grid item xs={2}>
                        <div className={classes.lineThree}></div>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography className={classes.tabText}>Trending</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <img src={shopping1} style={{
                            height: "290px",
                            width: "390px",
                            marginTop: "220px",
                        }}
                            alt="lady with bag" />
                    </Grid>
                    <Grid item xs={2}>
                        <div className={classes.socialButoons}>
                            <InstagramIcon />
                            <TwitterIcon />
                            <FacebookIcon />
                            <LinkedInIcon />
                        </div>
                    </Grid>
                </Grid >
                <Typography className={classes.webQuote} >The world is my <br></br> Runway.</Typography>
            </Grid>
            <Footer />
        </Grid >
    );
}
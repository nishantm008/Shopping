import React, { useState } from 'react';
import { makeStyles, withStyles  } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import { Typography, Button, Tabs, Tab } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { GoogleLogout } from 'react-google-login';
import shopping1 from '../assets/shopping1.jpg';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import { useHistory } from 'react-router';

const clientId =
    '795447102884-93gjj56spb8g83vflgjgjej16ggj1hlt.apps.googleusercontent.com';

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
        width: "1920px",
        height: "937px"
    },
    drawerGrid: {
        backgroundColor: "#89279E"
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
    quoteText: {
        marginLeft: "110px",
        font: "normal normal normal 20px/27px Gigi",
        color: "#FFFFFF",
    },
}));

export default function Home() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    // const history = useHistory()
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const onSuccessLogout = () => {
        // history.push('/')
        console.log('Logout made successfully');
        alert('Logout made successfully ✌');
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    //   const onLogout = () => {
    //     history.push('/')
    //   }

    const list = () => (
        <div
            className={clsx(classes.list)}
            role="presentation"
            onClick={handleDrawerOpen}
        >
            {/* <Button className={classes.log} color="secondary" onClick={onLogout} variant="text">Logout</Button> */}
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccessLogout}
                render={renderProps => (
                    <Button className={classes.log}
                        onClick={renderProps.onClick}
                        variant="text">Logout</Button>
                )}
            ></GoogleLogout>
        </div>
    );

    return (
        <Grid container className={classes.root}>
            <Grid className={classes.drawerGrid} item xs={3}>
                <AppBar className={classes.appBar} position="relative" elevation={0}>
                    <Toolbar>
                        <IconButton className={classes.menuButton} onClick={handleDrawerOpen} onClose={handleDrawerClose} edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer anchor='left' open={open} onClose={handleDrawerClose}>
                    {list()}
                </Drawer>
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
                <img src={shopping1} style={{
                    height: "290px",
                    width: "390px",
                    marginLeft: "190px",
                    marginTop: "80px",
                }}
                    alt="lady with bag" />
            </Grid>
            <Grid item xs={9}>
                <StyledTabs
                    value={value}
                    onChange={handleChange}
                        style= {{
                            marginLeft: "800px",
                           }}
                >
                    <StyledTab label="TRENDING" />
                    <StyledTab label="COLLECTIONS" />
                    <StyledTab label="SHOWS" />
                    <StyledTab label="WARDROBE" />
                </StyledTabs >
            </Grid>
        </Grid >
    );
}
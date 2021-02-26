import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid, TextField, Typography, InputAdornment, Button } from '@material-ui/core';
import logo from '../assets/login.jpg';
import lockIcon from '../assets/lockIcon.svg';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PersonIcon from '@material-ui/icons/Person';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            width: "1920px",
            height: "900px"
        },
        loginGrid: {
            width: "1155px",
            height: "900px",
            backgroundColor: "#89279E"
        },
        loginText: {
            // color: 'transparent linear-gradient(180deg, #C18686 0%, #FBD3D3 100%)',
            color: "#C18686",
            fontSize: "50px",
            marginLeft: "420px"
        },
        line: {
            width: "261px",
            height: "10px",

            backgroundImage: "radial-gradient(closest-side at 50% 50%, #ffffff, #563A61)",
            marginLeft: "355px"
        },
        textfieldGrid: {
            marginTop: "140px",
            marginLeft: "350px"
        },
        loginButton: {
            marginLeft: "45px",
            marginBottom: "10px",
            width: "182px",
            height: "39px",
            borderRadius: "20px",
            background: "#89279E 0% 0% no-repeat padding-box",
            font: "normal normal normal 25px / 33px Yu Gothic UI",
            letterSpacing: "3.75px",
            color: "#FFFFFF",
            textTransform: "uppercase",
        },
        linkText: {
            marginLeft: "20px",
            textAlign: "left",
            font: "normal normal normal 16px/18px Helvetica Neue",
            color: "#FFFFFF",
            transitionDelay: "10s",
            textTransform: "none",
            '&:hover': {
                font: "normal normal normal 16px/18px Helvetica Neue",
                color: "#3B9AFF",
                marginTop: " 10px",
                textDecoration: "underline",
            }
        }
    }),
);
export default function Login() {

    const classes = useStyles();
    const history = useHistory()
    const onRegistration = () => {
        history.push('/register')
    }
    return (
        <Grid container className={classes.root}>
            <Grid className={classes.loginGrid} item xs={6}>
                <AccountCircleIcon style={{
                    height: "105px", width: "120px", marginTop: "35px",
                    marginLeft: "420px"
                }} />
                <Typography className={classes.loginText}>Login</Typography>
                <div className={classes.line}></div>
                <Grid className={classes.textfieldGrid} >
                    <Grid item>
                        <TextField
                            placeholder="Username or Email"
                            variant="outlined"
                            size="small"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PersonIcon />
                                    </InputAdornment>
                                ),
                            }}
                            style={{
                                backgroundColor: "white",
                                color: "#868D96",
                                width: "270px",
                                marginBottom: "32px"
                            }}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            placeholder="Password"
                            variant="outlined"
                            size="small"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <img src={lockIcon} height="22px" width="18px" alt="" />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <VisibilityIcon />
                                    </InputAdornment>
                                ),
                            }}
                            style={{
                                backgroundColor: "white",
                                color: "#868D96",
                                width: "270px",
                                marginBottom: "40px"
                            }}
                        />
                    </Grid>
                    <Grid>
                        <Button className={classes.loginButton}
                            variant="outlined"
                            disableRipple="false">LOGIN
                          </Button>
                    </Grid>
                    <Grid>
                        <Button className={classes.linkText}
                            variant="text"
                            disableRipple="false"
                            onClick={onRegistration}>Don't have account? Click here
                           </Button>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={6}>
                <img src={logo} height="900px" width="765px" alt="logo" />
            </Grid>
        </Grid>
    )
};

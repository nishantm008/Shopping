import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid, TextField, Typography, InputAdornment, Button } from '@material-ui/core';
import logo from '../assets/registration.jpg';
import facebookButton from '../assets/facebookButton.svg';
import googleButton from '../assets/googleButton.svg';
import lockIcon from '../assets/lockIcon.svg';
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            width: "1920px",
            height: "900px"
        },
        signupGrid: {
            width: "1155px",
            height: "900px",
            backgroundColor: "#89279E",
            opacity: "0.8"
        },
        sideImage: {
            background: `url(${logo})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "765px 900px",
            opacity: "0.6"

        },
        signupText: {
            // color: 'transparent linear-gradient(180deg, #C18686 0%, #FBD3D3 100%)',
            color: "#C18686",
            fontSize: "50px",
            marginLeft: "390px",
            marginTop: "70px"
        },
        line: {
            width: "261px",
            height: "10px",
            backgroundImage: "radial-gradient(closest-side at 50% 50%, #ffffff, #563A61)",
            marginTop: "40px",
            marginLeft: "350px"
        },
        textfieldGrid: {
            marginTop: "50px",
            marginLeft: "330px"
        },
        registerButton: {
            marginLeft: "50px",
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
            marginLeft: "10px",
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
export default function Signup() {

    const classes = useStyles();
    const history = useHistory()
    const onLogin = () => {
        history.push('/')
    }

    return (
        <Grid container className={classes.root}>
            <Grid className={classes.signupGrid} item xs={6}>
                <Typography className={classes.signupText}>Sign up</Typography>
                <div className={classes.line}></div>
                <Grid className={classes.textfieldGrid} >
                    <Grid container xs={9}>
                        <Grid item xs={4}>
                            <TextField
                                placeholder="First Name"
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
                                    width: "140px",
                                    marginBottom: "32px"
                                }}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                placeholder="Last Name"
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
                                    width: "140px",
                                    marginBottom: "32px"
                                }}
                            />
                        </Grid>
                    </Grid>

                    <Grid item>
                        <TextField
                            placeholder="Username"
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
                                width: "295px",
                                marginBottom: "32px"
                            }}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            placeholder="Email"
                            variant="outlined"
                            size="small"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailIcon />
                                    </InputAdornment>
                                ),
                            }}
                            style={{
                                backgroundColor: "white",
                                color: "#868D96",
                                width: "295px",
                                marginBottom: "40px"
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
                            }}
                            style={{
                                backgroundColor: "white",
                                color: "#868D96",
                                width: "295px",
                                marginBottom: "40px"
                            }}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            placeholder="Confirm Password"
                            variant="outlined"
                            size="small"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <img src={lockIcon} height="22px" width="18px" alt="" />
                                    </InputAdornment>
                                ),
                            }}
                            style={{
                                backgroundColor: "white",
                                color: "#868D96",
                                width: "295px",
                                marginBottom: "40px"
                            }}
                        />
                    </Grid>
                    <Grid>
                        <Button className={classes.registerButton}
                            variant="outlined"
                            disableRipple="false">Register
                          </Button>
                    </Grid>
                    <Grid>
                        <Button className={classes.linkText}
                            variant="text"
                            disableRipple="false"
                            onClick={onLogin}>Already have an account? Click here
                           </Button>
                    </Grid>
                </Grid>
            </Grid>

            <Grid className={classes.sideImage} item xs={6}>
                {/* <img src={logo} style={{ height: "900px", width: "765px", opacity: "0.6" }} alt="logo" /> */}
                <Button disableRipple="false">
                    <img src={facebookButton} style={{ height: "88px", width: "460px", opacity: 1, marginLeft: "140px", marginTop: "200px" }} alt="facebook" />
                </Button>
                <Button disableRipple="false">
                    <img src={googleButton} style={{ height: "88px", width: "460px", opacity: 1, marginLeft: "140px", marginTop: "20px" }} alt="facebook" />
                </Button>
            </Grid>
        </Grid>
    )
};

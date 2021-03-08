import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid, TextField, Typography, InputAdornment, Button, CardMedia } from '@material-ui/core';
import logo from '../assets/login.jpg';
import lockIcon from '../assets/lockIcon.svg';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PersonIcon from '@material-ui/icons/Person';
import VisibilityIcon from '@material-ui/icons/Visibility';
import facebookButton from '../assets/facebookButton.svg';
import googleButton from '../assets/googleButton.svg';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router';
import { refreshTokenSetup } from '../utils/refreshToken';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            width: "1920px",
            height: "937px"
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
        logoText: {
            font: "normal normal normal 100px/130px Curlz MT",
            color: "#FFFFFF",
            marginLeft: "30px",
        },
        logominiText: {
            font: "normal normal normal 30px/5px Curlz MT",
            color: "#FFFFFF",
            marginLeft: "100px",
        },
        line: {
            width: "261px",
            height: "10px",

            backgroundImage: "radial-gradient(closest-side at 50% 50%, #ffffff, #563A61)",
            marginLeft: "355px"
        },
        textfieldGrid: {
            marginTop: "80px",
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

// const clientId =
//     '795447102884-qvi4l8mu3i2bdcta9cq3iuk04mr1j80g.apps.googleusercontent.com';

export default function Login() {

    const classes = useStyles();
    const history = useHistory()
    const onRegistration = () => {
        history.push('/register')
    }

    const onSuccess = (res) => {
        history.push('/home')
        console.log('Login Success: currentUser:', res.profileObj);
        alert(
            `Logged in successfully welcome ${res.profileObj.name}.`
        );
        refreshTokenSetup(res);
    };

    const onFailure = (res) => {
        console.log('Login failed: res:', res);
        alert(
            `Failed to login.`
        );
    };

    const responseFacebook = (res) => {
        history.push('/home')
        console.log('Login Success: currentUser:', res.name);
        alert(
            `Logged in successfully welcome ${res.name}.`
        );
      }

    return (
        <Grid container className={classes.root}>
            <Grid className={classes.loginGrid} item xs={7}>
                <Typography className={classes.logoText}>Divine</Typography>
                <Typography className={classes.logominiText}>Explore</Typography>
                <AccountCircleIcon style={{
                    height: "105px", width: "120px", marginLeft: "420px", marginTop: " -88px",
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
                <Grid>
                    {/* <Button style={{ height: "30px", width: "150px", marginLeft: "408px", marginTop: "20px" }}>
                        <img src={facebookButton} style={{ height: "60px", width: "150px" }} alt="facebook" />
                    </Button> */}
                    <FacebookLogin
                        appId="126512782728952"
                        // autoLoad
                        callback={responseFacebook}
                        onFailure= {onFailure}
                        render={renderProps => (
                            <Button onClick={renderProps.onClick}
                                style={{ height: "30px", width: "150px", marginLeft: "408px", marginTop: "20px" }}>
                                <img src={facebookButton} style={{ height: "60px", width: "150px" }} alt="facebook" />
                            </Button>
                        )}
                    />
                </Grid>
                <Grid>
                    {/* <Button style={{ height: "30px", width: "150px", marginLeft: "408px", marginTop: "10px"}}>
                    <img src={googleButton} style={{ height: "60px", width: "150px" }} alt="facebook" />
                </Button> */}
                    <GoogleLogin
                        clientId="795447102884-93gjj56spb8g83vflgjgjej16ggj1hlt.apps.googleusercontent.com"
                        render={renderProps => (
                            <Button onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                style={{ height: "30px", width: "150px", marginLeft: "408px", marginTop: "10px" }}>
                                <img src={googleButton} style={{ height: "60px", width: "150px" }} alt="facebook" />
                            </Button>
                        )}
                        buttonText="Login"
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={'single_host_origin'}
                    />
                </Grid>
            </Grid>
            <Grid item xs={5}>
                <CardMedia component="img" height="900px" src={logo} />
            </Grid>
        </Grid>
    )
};

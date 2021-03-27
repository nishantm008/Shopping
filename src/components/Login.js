import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid, TextField, Typography, InputAdornment, Button, CardMedia, IconButton } from '@material-ui/core';
import logo from '../assets/login.jpg';
import lockIcon from '../assets/lockIcon.svg';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PersonIcon from '@material-ui/icons/Person';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import facebookButton from '../assets/facebookButton.svg';
// import googleButton from '../assets/googleButton.svg';
// import { GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router';
// import { refreshTokenSetup } from '../utils/refreshToken';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import axios from 'axios';
import { API_BASE_URL, ACCESS_TOKEN_NAME } from '../constants/apiConstants';

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
            marginLeft: "350px",
            '& .MuiTextField-root': {
                background: "#FFFFFF 0% 0% no-repeat padding-box",
                borderRadius: "5px",
                width: "270px",
                marginBottom: "32px"
            },
        },
        loginButton: {
            marginLeft: "45px",
            marginBottom: "20px",
            marginTop: "40px",
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
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const onChangeUsername = (e) => {
        setUsername(e.target.value);
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const onPasswordVisibilityToggle = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            "username": username,
            "password": password,
        }
        axios.post(API_BASE_URL + '/user/login', payload)
            .then(function (response) {
                if (response.status === 200) {
                    console.log("Login Successful", response.data)
                    localStorage.setItem(ACCESS_TOKEN_NAME, response.data.token);
                    history.push('/home')
                    alert(
                        `Logged in successfully welcome ${response.data.user.fullName}.`
                    );
                } else {
                    console.log("Some error ocurred");
                }
            })
            .catch(function (error) {
                console.log(error.response.data.message);
                alert(
                    `${error.response.data.message}.`
                );
            });
    }

    const onRegistration = () => {
        history.push('/register')
    }

    // const onSuccess = (res) => {
    //     history.push('/home')
    //     console.log('Login Success: currentUser:', res.profileObj);
    //     alert(
    //         `Logged in successfully welcome ${res.profileObj.name}.`
    //     );
    //     refreshTokenSetup(res);
    // };

    // const onFailure = (res) => {
    //     console.log('Login failed: res:', res);
    //     alert(
    //         `Failed to login.`
    //     );
    // };

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
                    <form onSubmit={handleSubmit}>
                        <Grid item>
                            <TextField
                                name="username"
                                value={username}
                                required
                                onChange={onChangeUsername}
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
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                name="password"
                                value={password}
                                required
                                onChange={onChangePassword}
                                placeholder="Password"
                                variant="outlined"
                                size="small"
                                type={showPassword ? 'text' : 'password'}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <img src={lockIcon} height="22px" width="18px" alt="" />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={onPasswordVisibilityToggle}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid>
                            <Button className={classes.loginButton}
                                variant="outlined"
                                disableRipple="false"
                                type="submit"
                                disabled={!(username.length > 0 && password.length > 0)}
                            >
                                LOGIN
                          </Button>
                        </Grid>
                        <Grid>
                            <Button className={classes.linkText}
                                variant="text"
                                disableRipple="false"
                                onClick={onRegistration}
                            >
                                Don't have account? Click here
                           </Button>
                        </Grid>
                    </form>
                </Grid>
                <Grid>
                    <FacebookLogin
                        appId="126512782728952"
                        callback={responseFacebook}
                        // onFailure={onFailure}
                        render={renderProps => (
                            <Button onClick={renderProps.onClick}
                                style={{ height: "30px", width: "150px", marginLeft: "408px", marginTop: "20px" }}>
                                <img src={facebookButton} style={{ height: "60px", width: "150px" }} alt="facebook" />
                            </Button>
                        )}
                    />
                </Grid>
                <Grid>
                    {/* <GoogleLogin
                    clientId="795447102884-93gjj56spb8g83vflgjgjej16ggj1hlt.apps.googleusercontent.com"
                    render={renderProps => (
                        <Button onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                            style={{ height: "30px", width: "150px", marginLeft: "408px", marginTop: "10px" }}>
                            <img src={googleButton} style={{ height: "60px", width: "150px" }} alt="facebook" />
                        </Button>
                    )}
                    // onSuccess={onSuccess}
                    // onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                /> */}
                </Grid>
            </Grid>
            <Grid item xs={5}>
                <CardMedia component="img" height="900px" src={logo} />
            </Grid>
        </Grid>
    )
};

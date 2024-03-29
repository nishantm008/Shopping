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
import { useHistory } from 'react-router';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { API_BASE_URL, ACCESS_TOKEN_NAME } from '../constants/apiConstants';
import Footer from './Footer';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            width: "100%",
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

const registeredUser = (data) => new Promise(async (resolve, reject) => {
    try {
        const response = await fetch(`${API_BASE_URL}/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const result = await response.json()
        resolve(result)
    } catch (e) {
        reject(e)
    }
})
export default function Login(props) {

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {
            "username": username,
            "password": password,
        }
        try {
            const result = await registeredUser(user)
            if (result.user) {
                console.log('Success:', result)
                localStorage.setItem(ACCESS_TOKEN_NAME, result.token);
                history.push({
                    pathname: '/home',
                    state: { result }
                })
                alert(
                    `Logged in successfully welcome ${result.user.fullName}.`
                );
            }
            if (result.message) {
                console.log(result.message)
                alert(result.message)
            }
        } catch (error) {
            console.error('unhandled error:', error)
        }
    }

    const onRegistration = () => {
        history.push('/register')
    }

    const responseFacebook = (res) => {
        history.push('/home')
        console.log('Login Success: currentUser:', res.name);
        alert(
            `Logged in successfully welcome ${res.name}.`
        );
    }

    return (
        <div className={classes.root}>
            <Grid container>
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
                            render={renderProps => (
                                <Button onClick={renderProps.onClick}
                                    style={{ height: "30px", width: "150px", marginLeft: "408px", marginTop: "20px" }}>
                                    <img src={facebookButton} style={{ height: "60px", width: "150px" }} alt="facebook" />
                                </Button>
                            )}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={5}>
                    <CardMedia component="img" height="900px" src={logo} />
                </Grid>
                <Footer />
            </Grid>
        </div>
    )
};

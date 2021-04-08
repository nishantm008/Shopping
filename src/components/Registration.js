import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid, TextField, Typography, InputAdornment, Button, CardMedia } from '@material-ui/core';
import logo from '../assets/registration.jpg';
import lockIcon from '../assets/lockIcon.svg';
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types'
import Footer from './Footer';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            width: "100%",
        },
        signupGrid: {
            width: "1155px",
            height: "900px",
            backgroundColor: "#89279E",
        },
        sideImage: {
            height: "900px",
        },
        signupText: {
            color: "#C18686",
            fontSize: "50px",
            marginLeft: "390px",
            marginTop: "-35px"
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
            marginTop: "40px",
            marginLeft: "350px"
        },
        textfieldGrid: {
            marginTop: "50px",
            marginLeft: "330px",
            '& .MuiTextField-root': {
                background: "#FFFFFF 0% 0% no-repeat",
                borderRadius: "5px",
                width: "270px",
                marginBottom: "32px",
                marginLeft: "15px"
            },
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

Signup.propTypes = {
    createUser: PropTypes.func,
    user: PropTypes
  }

export default function Signup(props) {

    const classes = useStyles();
    const history = useHistory()
    const [fullName, setfullName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [confirmpasswordErrorState, setconfirmpasswordErrorState] = useState();

    const onChangefullName = (e) => {
        setfullName(e.target.value);
    };

    const onChangeUsername = (e) => {
        setUsername(e.target.value);
    };

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const onChangeconfirmPassword =  (e) => {
        setconfirmPassword(e.target.value);
    };

    const sendDetailsToServer =  () => {
        if (fullName.length && username.length && email.length && password.length) {
            const user = {
                "fullName": fullName,
                "username": username,
                "email": email,
                "password": password,
                "confirmPassword": confirmPassword
            }
            try {
                 props.createUser(user)
                console.log('Success:', user)
                history.push('/')
              } catch (error) {
                console.error('Error:', error)
              }

            }
        }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setconfirmpasswordErrorState("");
            sendDetailsToServer();
        } else {
            setconfirmpasswordErrorState("Password does not matched!");
        }
    }



    const onLogin = () => {
        history.push('/')
    }

    return (
        <Grid container className={classes.root}>
            <Grid className={classes.signupGrid} item xs={7}>
                <Typography className={classes.logoText}>Divine</Typography>
                <Typography className={classes.logominiText}>Explore</Typography>
                <Typography className={classes.signupText}>Sign up</Typography>
                <div className={classes.line}></div>
                <Grid className={classes.textfieldGrid} >
                    <form onSubmit={handleSubmit}>
                        <Grid item>
                            <TextField
                                name="fullName"
                                value={fullName}
                                onChange={onChangefullName}
                                placeholder="Full Name"
                                variant="outlined"
                                size="small"
                                required
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
                                name="username"
                                value={username}
                                onChange={onChangeUsername}
                                placeholder="Username"
                                variant="outlined"
                                size="small"
                                required
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
                                name="email"
                                value={email}
                                onChange={onChangeEmail}
                                placeholder="Email"
                                variant="outlined"
                                size="small"
                                required
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <EmailIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                name="password"
                                value={password}
                                onChange={onChangePassword}
                                placeholder="Password"
                                variant="outlined"
                                size="small"
                                required
                                type="password"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <img src={lockIcon} height="22px" width="18px" alt="" />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                error={confirmpasswordErrorState}
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={onChangeconfirmPassword}
                                helperText={confirmpasswordErrorState}
                                placeholder="Confirm Password"
                                variant="outlined"
                                size="small"
                                required
                                type="password"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <img src={lockIcon} height="22px" width="18px" alt="" />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid>
                            <Button className={classes.registerButton}
                                variant="outlined"
                                disableRipple="false"
                                type="submit"
                                disabled=
                                {!(fullName.length > 0 &&
                                    username.length > 0 &&
                                    email.length > 0 &&
                                    password.length > 0 &&
                                    confirmPassword.length > 0)}
                            >
                                Register
                          </Button>
                        </Grid>
                        <Grid>
                            <Button className={classes.linkText}
                                variant="text"
                                disableRipple="false"
                                onClick={onLogin}>Already have an account? Click here
                           </Button>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
            <Grid item xs={5}>
                <CardMedia className={classes.sideImage} component="img" src={logo} />
            </Grid>
            <Footer />
        </Grid>
    )
};

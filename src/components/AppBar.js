import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { Button } from '@material-ui/core';
import clsx from 'clsx';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: "100%",
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    appBar: {
        position: 'relative',
        zIndex: 1400,
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
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    homeButton: {
        position: 'absolute',
        top: theme.spacing(12),
        left: theme.spacing(15),
    }
}));

export default function PrimarySearchAppBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const history = useHistory()
    const isMenuOpen = Boolean(anchorEl);
    const [open, setOpen] = useState(false);


    const onSuccessLogout = () => {
        localStorage.clear();
        alert('Logout made successfully ✌');
        history.push('/')
    };

    const onHomeClick =() => {
        history.push('/home')
    }

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const list = () => (
        <div
            className={clsx(classes.list)}
            role="presentation"
            onClick={handleDrawerOpen}
        >
             <Button className={classes.homeButton} onClick={onHomeClick} variant="text" >Home</Button>
            <Button className={classes.log} color="primary" onClick={onSuccessLogout} variant="text">Logout</Button>
        </div>
    );

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            getContentAnchorEl={null}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            id='primary-search-account-menu'
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} position="relative" elevation={0}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        onClick={handleDrawerOpen}
                        onClose={handleDrawerClose}
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className={classes.grow} />
                    <div >
                        <IconButton aria-label="show 2 items in cart" color="inherit">
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                        <IconButton aria-label="show 17 new notifications" color="inherit">
                            <Badge badgeContent={17} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls='primary-search-account-menu'
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer anchor='left' open={open} onClose={handleDrawerClose}>
                {list()}
            </Drawer>
            {renderMenu}
        </div>
    );
}

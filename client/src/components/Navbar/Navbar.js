import React, { useState, useEffect } from 'react'
import { AppBar, Typography, Toolbar, Button, Avatar } from '@material-ui/core';
import useStyles from './styles'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';


const Navbar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();


    const logout = () => {
        dispatch({ type: 'LOGOUT' })
        history.push('/')
        setUser(null);
        localStorage.getItem('profile', null);
    };


    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    console.log("user", user);

    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location])


    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Cocktails App</Typography>

            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.redbordo} alt={user.result.name} src={user.result.image}> {user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6"> {user.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} style={{ textTransform: 'none', backgroundColor: '#990000', color: '#FFFFFF' }} onClick={logout}> Logout </Button>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" style={{ textTransform: 'none', backgroundColor: '#990000', color: '#FFFFFF' }}> Signin </Button>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar

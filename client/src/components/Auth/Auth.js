import React, { useState } from 'react'
import { Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import useStyles from './styles';
import Input from './Input';

import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import Icon from './Icon';
import { useDispatch } from 'react-redux';
import { signin, signup } from '../../actions/auth'

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };


const Auth = () => {
    const styleclass = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const dispatch = useDispatch()
    const history = useHistory();
    const [formData, setFormData] = useState(initialState);

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignup) {
            dispatch(signup(formData, history));
        } else {
            dispatch(signin(formData, history));

        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
    }

    const googleSuccess = async (res) => {
        const result = res?.profileObj; //cannot get property profileObj 
        const token = res?.tokenId;

        try {
            dispatch({ type: 'AUTH', data: { result, token } });
            console.log(result);
            history.push('/');
        } catch (error) {
            console.log(error)
        }

    }
    const googleFailure = (error) => {
        console.log(error)
        console.log("Google Sign In was unsuccessfull, Try again later")
    }

    return (
        <div>
            <Container component="main" maxWidth="xs">
                <Paper className={styleclass.paper} elevation={3}>
                    <Typography variant="h5" style={{ textTransform: 'none', color: '#ffc107', fontWeight: "bolder" }} >{isSignup ? 'Sign Up' : 'Sign In'} </Typography>
                    <VpnKeyOutlinedIcon style={{ background: '#FFFFFF', color: '#ffc107' }} />
                    <form className={styleclass.form} onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            {
                                isSignup && (
                                    <>
                                        <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                        <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                                    </>
                                )
                            }

                            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                            {isSignup && <Input name="confirmPassword" label="Repreat Password" handleChange={handleChange} type="password" />}
                        </Grid>
                        <Button type="submit" fullWidth variant="contained" style={{ textTransform: 'none', backgroundColor: '#ffc107', color: '#FFFFFF', fontWeight: "bold" }} className={styleclass.submit}>
                            {isSignup ? 'Sign Up' : 'Sign In'}
                        </Button>
                        <GoogleLogin

                            clientId="525178632550-njbnkdpnr7sco36lhf0nimhsoavkubj1.apps.googleusercontent.com"
                            render={(renderProps) => (
                                <Button className={styleclass.googleButton}
                                    style={{ textTransform: 'none', backgroundColor: '#ffc107', color: '#FFFFFF', fontWeight: "bold" }}
                                    fullWidth
                                    onClick={renderProps.onClick}
                                    startIcon={<Icon />}
                                    vartiant="contain">
                                    Google Signin
                                </Button>
                            )}
                            onSuccess={googleSuccess}
                            onFailure={googleFailure}
                            cookiePolicy="single_host_origin"
                        />
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Button onClick={switchMode} className={styleclass.withshadow} style={{ textTransform: 'none', color: '#ffc107', fontWeight: "bold" }}>
                                    {isSignup ? 'Already have an account? Login ' : "Don't have an account? Signup Now!"}
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Container>
        </div>
    )
}

export default Auth

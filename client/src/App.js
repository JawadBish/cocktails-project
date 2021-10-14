import React, {useEffect} from 'react'
import {Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';


import {getCocktails} from './actions/cocktails'
import cocktailsImg from './images/cocktails.png'
import Cocktails from './components/Cocktails/Cocktails'
import Form from './components/Form/Form'

import useStyles from './styles'

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getCocktails());
  },[dispatch])

  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2:" align="center">Cocktails</Typography>
         <img className={classes.image} src={cocktailsImg} alt="cocktails" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Cocktails/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;

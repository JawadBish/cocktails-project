import React from 'react'
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import CocktailDetails from './components/CocktailDetails/CocktailDetails';
import './index.css';

const App = () => {


  return (
    <BrowserRouter>
      <Container maxwidth="lg">
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/cocktails" />} />
          <Route path="/cocktails" exact component={Home} />
          <Route path="/cocktails/search" exact component={Home} />
          <Route path="/cocktails/:id" component={CocktailDetails} />
          <Route path="/auth" exact component={Auth} />
        </Switch>

      </Container>
    </BrowserRouter>
  );
}

export default App;

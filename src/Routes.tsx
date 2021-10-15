import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AdminSignin from 'pages/AdminSignin/AdminSignin';
import AdminMain from 'pages/AdminMain/AdminMain';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={AdminSignin} />
        <Route exact path="/main" component={AdminMain} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AdminSignin from 'pages/AdminSignin/AdminSignin';
import ClientList from 'pages/ClientList/ClientList';
import UserList from 'pages/UserList/UserList';
import SourcingManageList from 'pages/SourcingManage/SourcingManageList';
import SourcingStatusList from 'pages/SourcingStatus/SourcingStatusList';
import ClientDetail from 'pages/ClientList/ClientDetail';
import UserDetail from 'pages/UserList/UserDetail';
import SourcingManegeDetail from 'pages/SourcingManage/SourcingManegeDetail';
import SourcingStatusDetail from 'pages/SourcingStatus/SourcingStatusDetail';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={AdminSignin} />
        <Route exact path="/clientList" component={ClientList} />
        <Route exact path="/userList" component={UserList} />
        <Route exact path="/crowdFileList" component={SourcingManageList} />
        <Route exact path="/crowdStatusList" component={SourcingStatusList} />
        <Route exact path="/client/:id" component={ClientDetail} />
        <Route exact path="/user/:id" component={UserDetail} />
        <Route exact path="/crowdFile/:id" component={SourcingManegeDetail} />
        <Route exact path="/crowdStatus/:id" component={SourcingStatusDetail} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

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
        <Route exact path="/userDetail/:id" component={UserDetail} />
        <Route
          exact
          path="/crowdFileDetail/:id"
          component={SourcingManegeDetail}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

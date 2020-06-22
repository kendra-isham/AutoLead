import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from "../components/login/Login";

export default function Routes() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
    );
};
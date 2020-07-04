import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from "../components/login/Login";
import Chat from "../components/chat/Chat";
import Database from "../components/database/Database";
import PrivateRoute from "../components/private/PrivateRoute"

export default function Routes() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/chat" component={Chat} />
        <PrivateRoute exact path="/stats" component={Database} />
      </Switch>

  );
};
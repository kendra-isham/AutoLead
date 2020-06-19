import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Chat from "../components/chat/Chat";
import Login from "../components/login/Login";

export default function Routes() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/chat" component={Chat} is Private/>
        {/* redirect user to SignIn page if route does not exist*/}
        <Route component={Login} />
      </Switch>
    );
};
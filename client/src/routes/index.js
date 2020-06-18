import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Chat from "../components/chat/Chat";
import Login from "../components/login/Login";

export default function Routes() {
    return (
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/chat" component={Chat} isPrivate />
        {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
        <Route component={Login} />
      </Switch>
    );
};
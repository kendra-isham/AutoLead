import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from "../components/login/Login";
import Chat from "../components/chat/Chat";

export default function Routes() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/" component={Chat} /> 
      </Switch> 
    );
};

// <Switch>
//<Route exact path="/" component={Login} />
//</Switch> 
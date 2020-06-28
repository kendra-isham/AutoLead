import React from 'react';
import { Switch, Route, Router} from 'react-router-dom';
import Login from "../components/login/Login";
import Chat from "../components/chat/Chat";
import Database from "../components/database/Database";

export default function Routes() {
    return (
      <Switch>
        <Route path="/chat" component={Chat} />
        <Route exact path="/stats" component={Database} />
        <Route exact path="/" component={Login} />
      </Switch>

  );
};
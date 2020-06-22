// dependancies 
import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import store from "./store";
import { createSession } from "./actions/watson";
import axios from "axios";
import { Router } from 'react-router-dom';
import history from './history';
import Routes from './routes';

// checks to see if there's already a session
// if there is, get a new session_id
if (localStorage.session) {
  delete axios.defaults.headers.common["session_id"];
  axios.defaults.headers.common["session_id"] = localStorage.session;
} else {
  delete axios.defaults.headers.common["session_id"];
}

// connect app to redux 
const App = () => {

  // creates session
  store.dispatch(createSession());


  return (
    <Provider store={store}>
      <div className="App">
        <Router history={history}>
          <Routes /> 
        </Router>
      </div>
    </Provider>
  );
}

export default App;

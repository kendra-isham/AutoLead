// dependancies 
import React, { useEffect } from 'react';
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
//  if(localStorage.pID !== store.getState().login.loggedIn[1]){
//    window.localStorage.setItem('pID', JSON.stringify(store.getState().login.loggedIn[1]))
//  }

// connect app to redux 
const App = () => {

  // creates session
  useEffect(() => {
    // Check if there session
//    if (!localStorage.session) {
       store.dispatch(createSession());

  });
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

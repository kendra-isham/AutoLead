// dependancies 
import React, { useEffect } from 'react';
import './App.css';
import { Provider } from "react-redux";
import store from "./store";
import { createSession } from "./actions/watson";
import axios from "axios";
import Routes from './routes';

// checks to see if there's already a session
if (localStorage.session) {
  
  axios.defaults.headers.common["session_id"] = localStorage.session;
} else {
  delete axios.defaults.headers.common["session_id"];
}

// connect app to redux 
const App = () => {

  // creates session
  useEffect(() => {
      store.dispatch(createSession());
  });

  return (
    <Provider store={store}>
      <div className="App">
          <Routes /> 
      </div>
    </Provider>
  );
}

export default App;

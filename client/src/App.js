// dependancies 
import React, { useEffect } from 'react';
import './App.css';
import { Provider } from "react-redux";
import store from "./store";
import Chat from "./components/chat/Chat";
import { createSession } from "./actions/watson";
import axios from "axios";

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
  // useEffect assists in creating session upon refresh
  useEffect(() => {
      store.dispatch(createSession());
  });


  return (
    <Provider store={store}>
      <div className="container">
          <Chat />
           {console.log("in app.js")}
      </div>
    </Provider>
  );
}

export default App;

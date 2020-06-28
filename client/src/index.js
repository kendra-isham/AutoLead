import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import Chat from './components/chat/Chat';
import Database from './components/database/Database';
import Login from './components/login/Login';

//    <React.StrictMode>
ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
      <App />
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


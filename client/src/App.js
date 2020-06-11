// dependancies 
import React from 'react';
import './App.css';
// redux
import { Provider } from "react-redux";
import store from "./store";

// chat component
import Chat from "./components/chat/Chat";

// connect app to redux 
const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
          <Chat />
      </div>
    </Provider>
  );
}

export default App;

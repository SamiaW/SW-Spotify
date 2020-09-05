import React, { useEffect } from 'react';
import Login from './Login.js';
import './App.css';
import { getTokenFromUrl } from './spotify'

function App() {

  //Run code based on a given condition
  useEffect(() => {
    const token = getTokenFromUrl();
    window.location.hash = "";
    console.log('I have a token' , token);
  }, []);

  return (
    <div className="app">

      <Login />

    </div>
  );
}

export default App;

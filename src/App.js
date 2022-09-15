import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Body from './Components/Body';
function App() {
  return (
    <>
      <Navbar />
      <Body />
    </>
  );
}

export default App;

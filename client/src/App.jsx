// import logo from './logo.svg';
import './App.css';
import TodoWrapper from './Components/TodoWrapper';

// function App() {
//   return (
    
//   );
// }


import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';

import "./style/app.scss"
import "./style/header.scss"
import "./style/home.scss"

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
    <div className="App">
    <TodoWrapper/>
    {/* <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header> */}
  </div>
  </>
  );
}

export default App

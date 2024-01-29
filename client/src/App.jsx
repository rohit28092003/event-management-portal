<<<<<<< HEAD
// import logo from './logo.svg';
import './App.css';
import TodoWrapper from './Components/TodoWrapper';

function App() {
  return (
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
  );
}

export default App;
=======
import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';

import "./style/app.scss"
import "./style/header.scss"
import "./style/home.scss"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App
>>>>>>> 86aac4cbde8b3e9fe01821be68571e38fae46ade

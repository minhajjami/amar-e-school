import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import School from './components/School/School';


function App() {
  return (
    <div>
      <Header></Header>
      <School></School>
    </div>
  );
}

export default App;

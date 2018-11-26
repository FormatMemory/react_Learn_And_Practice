import React, { Component } from "react";
// import logo from './logo.svg';
import NavBar from "./component/navbar";
import Counters from "./component/counters";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Counters />
        <main classNam="container" />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import Menu from "./components/menu";
import About from "./components/about";
import Speakers from "./components/speakers";
import Location from "./components/location";

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <About />
        <Speakers />
        <Location />
      </div>
    );
  }
}

export default App;

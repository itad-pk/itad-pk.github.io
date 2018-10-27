import React, { Component } from "react";
import "./App.css";
import Menu from "./components/menu";
import About from "./components/about";
import Speakers from "./components/speakers";
import Location from "./components/location";
import MainLoader from "./components/mainLoader";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  render() {
    if(this.state.isLoading)
      return <MainLoader />;

    return (
      <div>
        <Menu />
        <About />
        <Speakers />
        <Location />
      </div>
    );
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 2000);
  }

}

export default App;

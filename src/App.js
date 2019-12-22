import React, { Component } from "react";
import "./App.scss";
// import Menu from "./components/menu";
// import Hero from "./components/hero";
// import About from "./components/about";
// import Speakers from "./components/speakers";
// import ItadGallery from "./components/itadGallery";
// import Location from "./components/location";
// import Agenda from "./components/agenda";
import Menu from "./components/menu";
import Hero from "./components/hero";
import About from "./components/about";
import Timer from "./components/timer";
import Speakers from "./components/speakers";
import Agenda from "./components/agenda";
import Partners from "./components/partners";
import Itad from "./components/itad";
import Location from "./components/location";
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <div>
        <Menu/>
        <Hero/>
        <Timer/>
        <About/>
        <Speakers/>
        <Agenda/>
        <Partners/>
        <Itad/>
        <Location/>
        <Footer/>
        {/* <Menu />
        <About />
        <Speakers />
        <Agenda />
        <ItadGallery />
        <Location /> */}
      </div>
    );
  }
}

export default App;

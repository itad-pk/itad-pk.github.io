import React, { Component } from "react";
import MapContainer from "./mapContainer";

class Location extends Component {
  state = {};
  render() {
    return (
      <div id="location">
      <h1 className="text-center">
          LOKALIZACJA
      </h1>
      <MapContainer />
      </div>
    );
  }
}

export default Location;

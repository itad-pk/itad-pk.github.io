import React, { Component } from "react";
import MapContainer from "./mapContainer";

class Location extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1 className="text-center" style={{ fontSize: "60px" }}>
          LOKACJA
        </h1>
        <MapContainer />
      </React.Fragment>
    );
  }
}

export default Location;

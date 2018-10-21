import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={18}
        style={{ width: "700px", height: "500px", position: "relative" }}
        initialCenter={{
          lat: 50.072406,
          lng: 19.942657
        }}
      >
        <Marker onClick={this.onMarkerClick} name={"Kotlowania"} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCAXGluiHFuePvveEldU9m_oZBbWsMdpg4"
})(MapContainer);

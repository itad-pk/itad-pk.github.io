import React from "react";
import { Map, Marker, GoogleApiWrapper, InfoWindow } from "google-maps-react";

export class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {
        lat: 50.072406,
        lng: 19.942657
      }
    };
  }

  onMarkerClick = (props, marker, e) => {
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: !this.state.showingInfoWindow
      });
  }

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    return (
        <section className="location" id="lokalizacja">
            <h2>Lokalizacja</h2>
            <Map google={this.props.google}
                onClick={this.onMapClicked}
                style={{width: '100%', height: '100%', position: 'relative', marginBottom: '-25px'}}
                zoom={18}
                initialCenter={{
                lat: 50.072406,
                lng: 19.942657
                }}>
                <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

                <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}>
                <div className="text-center">
                    <img width={200} className="img-fluid rounded mx-auto" src={require("../photos/kotlownia.JPG")} alt="kotlownia.jpg" />
                    <h4 className="pt-1">Kotłownia</h4>
                    <h6>ul. Warszawska 24</h6>
                    <h6>31-100, Kraków</h6>
                </div>
                </InfoWindow>
            </Map>
        </section>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCAXGluiHFuePvveEldU9m_oZBbWsMdpg4"
})(Location);

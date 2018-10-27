import React, { Component } from "react";
import { View } from "mdbreact";

class Speakers extends Component {
  state = {};
  render() {
    return (
      <div id="speakers">
        <h1 className="text-center">
          PRELEGENCI
        </h1>
        <div className="m-3">
          <View zoom>
            <img
              alt="img"
              className="img-fluid mb-3"
              src={require("../photos/itad_2017/horizontal/_MG_5318.jpg")}
            />
          </View>
          <View zoom>
            <img
              alt="img"
              className="img-fluid mb-3"
              src={require("../photos/itad_2017/horizontal/_MG_5318.jpg")}
            />
          </View>
          <View zoom>
            <img
              alt="img"
              className="img-fluid mb-3"
              src={require("../photos/itad_2017/horizontal/_MG_5318.jpg")}
            />
          </View>
          <View zoom>
            <img
              alt="img"
              className="img-fluid mb-3"
              src={require("../photos/itad_2017/horizontal/_MG_5318.jpg")}
            />
          </View>
        </div>
      </div>
    );
  }
}

export default Speakers;

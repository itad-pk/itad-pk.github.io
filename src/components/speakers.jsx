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
        <div className="ml-5 mt-5">
          <View zoom>
            <img
              alt="img"
              className="pb-5"
              width={350}
              height={350}
              src={require("../photos/itad_2017/horizontal/_MG_5318.jpg")}
            />
          </View>
          <View zoom>
            <img
              alt="img"
              className="pb-5"
              width={350}
              height={350}
              src={require("../photos/itad_2017/horizontal/_MG_5318.jpg")}
            />
          </View>
          <View zoom>
            <img
              alt="img"
              className="pb-5"
              width={350}
              height={350}
              src={require("../photos/itad_2017/horizontal/_MG_5318.jpg")}
            />
          </View>
          <View zoom>
            <img
              alt="img"
              className="pb-5"
              width={350}
              height={350}
              src={require("../photos/itad_2017/horizontal/_MG_5318.jpg")}
            />
          </View>
        </div>
      </div>
    );
  }
}

export default Speakers;

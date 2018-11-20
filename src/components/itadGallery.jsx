import React, { Component } from "react";
import { View } from "mdbreact";

class ItadGallery extends Component {
  state = {
    imgWidth: 450,
    imagesList: [
      { id: 1, path: require("../photos/img1.jpg") },
      { id: 2, path: require("../photos/img2.jpg") },
      { id: 3, path: require("../photos/img3.jpg") },
      { id: 4, path: require("../photos/img4.jpg") },
      { id: 5, path: require("../photos/img5.jpg") },
      { id: 6, path: require("../photos/img6.jpg") },
      { id: 7, path: require("../photos/img7.jpg") },
      { id: 8, path: require("../photos/img8.jpg") },
    ]
  };

  
  render() {
    let imagesList = this.state.imagesList.map(image => {
      return <View zoom key={image.id}>
                <img
                  alt="img"
                  width={this.state.imgWidth}
                  className="img-fluid"
                  src={image.path}
                />
              </View>
    });

    return (
      <div style={{ marginTop: "5%" }} id="itadGallery">
        <h1 className="text-center">ITAD 2017</h1>
        <div className="row justify-content-center">
          {imagesList}
        </div>
      </div>
    );
  }
}

export default ItadGallery;

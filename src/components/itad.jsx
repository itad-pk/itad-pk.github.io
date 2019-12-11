import React from 'react';
import { MDBContainer, View } from 'mdbreact';

export default class Itad extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imgWidth: 450,
            imagesList: [
              { id: 1, path: require("../photos/1.JPG") },
              { id: 2, path: require("../photos/2.JPG") },
              { id: 3, path: require("../photos/3.JPG") },
              { id: 4, path: require("../photos/4.JPG") },
              { id: 5, path: require("../photos/5.JPG") },
              { id: 6, path: require("../photos/11.JPG") },
              { id: 7, path: require("../photos/7.JPG") },
              { id: 8, path: require("../photos/8.JPG") },
              { id: 9, path: require("../photos/9.JPG") },
              { id: 10, path: require("../photos/10.JPG") },
              { id: 11, path: require("../photos/12.JPG") },
              { id: 12, path: require("../photos/6.JPG") }
            ]
          };
    }

    render() {
        const imagesList = this.state.imagesList.map(image => {
            return <View zoom key={image.id} width={this.state.imgWidth}>
                <img
                    alt="img"
                    width={this.state.imgWidth}
                    className="img-fluid"
                    src={image.path}
                />
            </View>
        });

        return (
            <section className="itad" id="itad-2018">
                <h2>ITAD 2018</h2>
                {imagesList}
            </section>
        )
    }
}

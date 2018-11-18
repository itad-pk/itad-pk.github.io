import React, { Component } from "react";
import {
  View,
  Carousel,
  CarouselInner,
  CarouselItem,
  Mask,
  Card,
  CardTitle,
  CardText
} from "mdbreact";

class About extends Component {
  render() {
    return (
      <div id="about" className="d-flex justify-content-center">
        <div className="row">
          <div className="container-fluid">
            <Carousel
              activeItem={1}
              length={4}
              showControls={false}
              showIndicators={false}
              style={{ boxShadow: "3px 8px 10px" }}
              className="mt-3"
            >
              <CarouselInner>
                <CarouselItem itemId="1">
                    <img
                      className="d-block img-fluid"
                      src={require("../photos/car1.jpg")}
                      alt="First slide"
                    />
                    <Mask overlay="black-light" />
                </CarouselItem>
                <CarouselItem itemId="2">
                    <img
                      className="d-block img-fluid"
                      src={require("../photos/car2.jpg")}
                      alt="Second slide"
                    />
                </CarouselItem>
                <CarouselItem itemId="3">
                  <View>
                    <img
                      className="d-block img-fluid"
                      src={require("../photos/car3.jpg")}
                      alt="Third slide"
                    />
                  </View>
                </CarouselItem>
                <CarouselItem itemId="4">
                  <View>
                    <img
                      className="d-block img-fluid"
                      src={require("../photos/car4.jpg")}
                      alt="Mattonit's item"
                    />
                  </View>
                </CarouselItem>                
                <CarouselItem itemId="5">
                  <View>
                    <img
                      className="d-block img-fluid"
                      src={require("../photos/car5.jpg")}
                      alt="Mattonit's item"
                    />
                  </View>
                </CarouselItem>
              </CarouselInner>
            </Carousel>
          </div>
          <div className="row m-3">
              <div className="col-sm-6 d-flex">
                <Card
                  className="p-3 mb-3"
                  style={{
                    backgroundColor: "#1C2331",
                    boxShadow: "3px 8px 10px"
                  }}
                >
                  <CardTitle style={{ color: "white" }}>O KONFERENCJI</CardTitle>
                  <CardText style={{ color: "white" }}>
                    Dzień IT Politechniki Krakowskiej to już kolejna, dziewiąta
                    edycja konferencji o szeroko pojętej tematyce technologicznej.
                    Podczas konferencji zaproszeni prelegenci przedstawią najnowsze
                    trendy w branży IT. Ponadto zainteresowani studenci będą mogli
                    poznać profile potencjalnych pracodawców, a także wziąć udział w
                    konkursach z atrakcyjnymi nagrodami. Konferencja jest
                    organizowana pod honorowym patronatem Prorektora dr hab. Inż.
                    Marka Stanuszka.
                  </CardText>
                </Card>
              </div>
              <div className="col-sm-6 d-flex">
                <Card
                className="p-3 mb-3"
                  style={{
                    backgroundColor: "#1C2331",
                    boxShadow: "3px 8px 10px",
                  }}
                >
                  <CardTitle style={{ color: "white" }}>CEL KONFERENCJI</CardTitle>
                  <CardText style={{ color: "white" }}>
                    Dzień IT Politechniki Krakowskiej ukierunkowany jest na
                    studentów kierunków informatycznych i skupia się na tematyce
                    technologii i programowania. Jako cel Grupa .NET Politechniki
                    Krakowskiej stawia sobie przekazanie wartościowej i praktycznej
                    wiedzy z branży IT. Konferencja jest także szansą nawiązania
                    relacji z firmami z branży technologicznej.
                  </CardText>
                </Card>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;

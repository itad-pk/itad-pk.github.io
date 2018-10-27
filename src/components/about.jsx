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
  state = {};
  render() {
    return (
      <div id="about" className="pt-5 pb-5 pl-5 pr-5">
        <div className="row">
          <div>
            <Carousel
              activeItem={1}
              length={4}
              showControls={false}
              showIndicators={false}
              style={{ boxShadow: "3px 8px 10px" }}
            >
              <CarouselInner>
                <CarouselItem itemId="1">
                  <View>
                    <img
                      height={70}
                      className="d-block"
                      src={require("../photos/itad_2017/horizontal/_MG_5279.jpg")}
                      alt="First slide"
                    />
                    <Mask overlay="black-light" />
                  </View>
                </CarouselItem>
                <CarouselItem itemId="2">
                  <View>
                    <img
                      height={70}
                      className="d-block"
                      src={require("../photos/itad_2017/horizontal/_MG_5279.jpg")}
                      alt="Second slide"
                    />
                  </View>
                </CarouselItem>
                <CarouselItem itemId="3">
                  <View>
                    <img
                      height={70}
                      className="d-block"
                      src={require("../photos/itad_2017/horizontal/_MG_5279.jpg")}
                      alt="Third slide"
                    />
                  </View>
                </CarouselItem>
                <CarouselItem itemId="4">
                  <View>
                    <img
                      height={70}
                      className="d-block"
                      src={require("../photos/itad_2017/horizontal/_MG_5279.jpg")}
                      alt="Mattonit's item"
                    />
                  </View>
                </CarouselItem>
              </CarouselInner>
            </Carousel>
          </div>
          <div className="col-sm-3">
            <Card
              className="pl-3 pr-3 pt-3 pb-3"
              style={{
                backgroundColor: "#041635",
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
            <Card
              className="pl-3 pr-3 pt-3 pb-3"
              style={{
                backgroundColor: "#041635",
                boxShadow: "3px 8px 10px",
                marginTop: "30%"
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
    );
  }
}

export default About;

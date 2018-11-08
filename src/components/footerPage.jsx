import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";

class FooterPage extends React.Component {
  render() {
    return (
      <Footer color="unique-color-dark" className="font-small pt-4 mt-4">
        <Container fluid md="6" className="text-center">
          <Row>
            <Col md="6">
              <i className="fa fa-facebook fa-3x" />
              <a href="https://www.facebook.com/dzienitpk/">   Odwiedź nas na Facebook'u.</a>
            </Col>
            <Col md="6">
              <i className="fa fa-mobile fa-3x" />
              <a href="https://eventory.cc/event/it-academic-day-politechniki-krakowskiej/mobile-app">  Pobierz aplikację mobilną Eventory</a>
            </Col>
          </Row>
        </Container>
        <div className="footer-copyright text-center py-3">
          <Container fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="http://mech.pk.edu.pl/"> Politechnika Krakowska </a>
          </Container>
        </div>
      </Footer>
    );
  }
}

export default FooterPage;
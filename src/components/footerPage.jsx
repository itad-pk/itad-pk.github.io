import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";

class FooterPage extends React.Component {
  render() {
    return (
      <Footer color="unique-color-dark" className="font-small">
        <Container fluid md="6" className="pt-3">
          <Row>
            <Col md="6">
              <i className="fa fa-facebook fa-3x" />
              <a href="https://www.facebook.com/dzienitpk/" className="pl-2">Odwiedź nas na Facebook'u.</a>
              <i className="fa fa-mobile fa-3x pl-5" />
              <a href="https://eventory.cc/event/it-academic-day-politechniki-krakowskiej/mobile-app" className="pl-2">Pobierz aplikację mobilną Eventory</a>
            </Col>
            <Col md="6">
            Kontakt: <br />
            <div className="pl-3">
              Marcin Miazga <br />
              tel: +48 792 595 243 <br />
              email: miazgamarcin@outlook.com
            </div>
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
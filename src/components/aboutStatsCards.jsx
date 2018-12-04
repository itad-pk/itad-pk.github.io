import React, { Component } from 'react';
import { Card, CardTitle, CardText } from "mdbreact";
import Countdown from 'react-countdown-now';

class AboutStatsCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className="row ml-0 mr-0 mt-3">
        <Card
          className="p-3 text-center col-6"
          style={{
            backgroundColor: "#1C2331",
            boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.60)"
          }}
        >
          <CardTitle style={{ color: "white" }}>
             Konferencja już trwa :)
          </CardTitle>
        </Card>
        <Card
          className="p-3 text-center col-6"
          style={{
            backgroundColor: "#1C2331",
            boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.60)"
          }}
        >
          <CardTitle style={{ color: "white" }}>
            Zostało
          </CardTitle>
          <CardText className="fa-5x" style={{ color: "white" }}>
            { this.props.ticketsLeft > 0 ? this.props.ticketsLeft : 0}
          </CardText>
          <CardTitle style={{ color: "white" }}>
            <i className="fa fa-2x fa-ticket"></i> biletów
          </CardTitle>
        </Card>
      </div>
    );
  }
};

export default AboutStatsCards;

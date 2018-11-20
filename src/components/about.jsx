import React, { Component } from "react";
import AboutCarousel from './aboutCarousel.jsx';
import AboutCards from './aboutCards.jsx';
import AboutStatsCards from './aboutStatsCards.jsx';
import axios from 'axios';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attendeesCount: 0
    };
  }

  render() {
    return (
      <div id="about" className="justify-content-center">
        <div className="row">
          <div className="col m-3">
            <AboutCarousel />
          </div>
          <div className="col m-3">
            <AboutCards />
          </div>
          <div className="col m-3">
            <AboutStatsCards ticketsLeft={200 - this.state.attendeesCount} />
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    axios.get('https://eventory.cc/api/v1/events/it-academic-day-politechniki-krakowskiej')
      .then(resp => this.setState({attendeesCount: resp.data.attendees_count}));
  }
}

export default About;

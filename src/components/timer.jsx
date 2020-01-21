import React from 'react';
import { MDBContainer } from 'mdbreact';

export default class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            finished: false
        };

        this.startTimer();
    }

    render() {
        let content;
        if(this.state.finished === false) {
            content = (<div className="content">
            <div className="counter">
                <span>{ this.state.days }</span>
                <span>dni</span>
            </div>
            <div className="counter">
                <span>{ this.state.hours }</span>
                <span>godzin</span>
            </div>
            <div className="counter">
                <span>{ this.state.minutes }</span>
                <span>minut</span>
            </div>
            <div className="counter">
                <span>{ this.state.seconds }</span>
                <span>sekund</span>
            </div>
            </div>);
        } else {
            content = (
                <div className="content">
                    <h3>Konferencja już się zaczęła</h3>
                </div>);
        }
        return (
            <section className="timer">
                <MDBContainer>
                    <h2>Do konferencji pozostało</h2>
                        {content}
                </MDBContainer>
            </section>
        );
    }

    startTimer = () => {
        let countDownDate = new Date("Jan 22, 2020 9:00:00").getTime();
        let timer = setInterval(() => {
            let currentDate = new Date().getTime();
            let distance = countDownDate - currentDate;

            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            this.setState({
                days, hours, minutes, seconds
            });

            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(timer);
                this.setState({
                    finished: true
                });
            }
        }, 100);
    }
}
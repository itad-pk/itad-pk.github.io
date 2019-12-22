import React, { Component } from 'react';
import { MDBCol } from 'mdbreact';

export default class Speaker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: props.img,
            name: props.name,
            desc: props.desc
        }
    }

    render() {
        return (
            <MDBCol size="3">
                <div className="speaker">
                    <img src={require(`../photos/${this.state.img}`)} />
                    <div className="title">
                        <span>{this.state.name}</span>
                        <p>{this.state.desc}</p>
                    </div>
                </div>
            </MDBCol>
        )
    }
}

import React from 'react';
import { MDBContainer } from 'mdbreact';

export default class Agenda extends React.Component {
    render() {
        return (
                <section id="agenda" className="agenda">
                <MDBContainer>
                    <h2>Agenda</h2>
                    <p>Już wkrótce więcej informacji</p>
                </MDBContainer>
            </section>
        )
    }
}

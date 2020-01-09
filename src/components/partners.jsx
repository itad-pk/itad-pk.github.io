import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

export default class Partners extends React.Component {
    render() {
        return (
            <section className="partners" id="partnerzy">
                <h2>Partnerzy konferencji</h2>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol size="4">
                            <img src={require("../photos/abb.jpg")}/>
                        </MDBCol>
                        <MDBCol size="4">
                            <img src={require("../photos/webcon.jpg")}/>
                        </MDBCol>
                        <MDBCol size="4">
                            <img src={require("../photos/novomatic.png")} />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol size="4">
                            <img src={require("../photos/ailleron.jpg")}/>
                        </MDBCol>
                        <MDBCol size="4">
                            <img src={require("../photos/strix.jpg")}/>
                        </MDBCol>
                        <MDBCol size="4">
                            <img src={require("../photos/motorola.png")}/>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        )
    }
}

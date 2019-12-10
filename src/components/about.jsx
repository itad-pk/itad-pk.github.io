import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

export default class About extends React.Component {
    render() {
        return (
            <section className="about" id="o-konferencji">
                <MDBContainer>
                    <h2>O KONFERENCJI</h2>
                    <p>Dzień IT Politechniki Krakowskiej to już kolejna, jedenasta edycja konferencji o szeroko pojętej tematyce technologicznej. 
                        Podczas konferencji zaproszeni prelegenci przedstawią najnowsze trendy w branży IT. Ponadto zainteresowani studenci 
                        będą mogli poznać profile potencjalnych pracodawców, a także wziąć udział w konkursach z atrakcyjnymi nagrodami.
                    </p>
                    <p>Dzień IT Politechniki Krakowskiej ukierunkowany jest na studentów kierunków informatycznych i skupia się na tematyce 
                        technologii i programowania. Jako cel Grupa .NET Politechniki Krakowskiej stawia sobie przekazanie wartościowej i 
                        praktycznej wiedzy z branży IT. Konferencja jest także szansą nawiązania relacji z firmami z branży technologicznej.
                    </p>
                    <p>Konferencja rusza 22. stycznia 2020 roku o godzinie 8:30. Spotykamy się w sali konferencyjno-wystawowej "Kotłownia" ul. Warszawska 24, Kraków</p>
                        <MDBRow>
                            <MDBCol md="4" sm="12" className="icon-wrapper">
                                <i className="icon icon-calendar"></i>
                                <span>22. stycznia 2020</span>
                            </MDBCol>
                                <MDBCol md="4" sm="12" className="icon-wrapper">
                                <i className="icon icon-clock"></i>
                                <span>8:30</span>
                            </MDBCol>        
                            <MDBCol md="4" sm="12" className="icon-wrapper">
                            <i className="icon icon-location"></i>
                                <span>Sala konferencyjno-wystawowa "Kotłownia" <br/>ul. Warszawska 24 Kraków</span>
                            </MDBCol>
                        </MDBRow>
                </MDBContainer>
            </section>
        );
    }
}
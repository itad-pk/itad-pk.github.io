import React from 'react';
import { MDBContainer } from 'mdbreact';

export default class Agenda extends React.Component {
    render() {
        return (
                <section id="agenda" className="agenda">
                <MDBContainer>
                    <h2>Agenda</h2>
                    <div className="list">
                        <div className="item">
                            <span>8:30 - 9:00</span>Rejestracja
                        </div>
                        <div className="item">
                            <span>9:00 - 9:15</span>Otwarcie konferencji
                            <p>Prorektor ds. studenckich dr hab. inż. Marek Stanuszek</p>
                        </div>
                        <div className="item">
                            <span>9:15 - 10:05</span>Azure Cognitive Services – inteligencja w chmurze Microsoft
                            <p>Łukasz Świszcz</p>
                        </div>
                        <div className="item">
                            <span>10:05 - 10:50</span>Jak stworzyć paczkę, z której skorzysta ktoś poza Tobą?
                            <p>Jakub Bobek</p>
                        </div>
                        <div className="item">
                            <span>10:50 - 11:50</span>Rozproszone uwierzytelnianie użytkowników z użyciem OpenId Connect w aplikacjach webowych
                            <p>Paweł Mstowski</p>
                        </div>
                        <div className="item">
                            <span>11:50 - 12:35</span>"Big Red Button" - bezpieczeństwo danych w chmurze z perspektywy klienta
                            <p>Andrzej Kubik</p>
                        </div>
                        <div className="item">
                            <span>12:35 - 13:05</span>Przerwa
                        </div>
                        <div className="item">
                            <span>13:05 - 14:05</span>Miej wpływ na swoją karierę, craft'uj swoją pracę
                            <p>Katarzyna Olszówka</p>
                        </div>
                        <div className="item">
                            <span>13:05 - 14:05</span>Kto to Panu tak ... napisał? Jak tworzyć lepszy kod.
                            <p>Dominik Pawlik</p>
                        </div>
                        <div className="item">
                            <span>14:05 - 15:05</span>W jakiej organizacji chcesz pracować?
                            <p>Błażej Drobniuch</p>
                        </div>
                        <div className="item">
                            <span>15:05 - 15:50</span>DevOps, czyli zautomatyzuj swój projekt
                            <p>Konrad Bielawski</p>
                        </div>
                    </div>
                </MDBContainer>
            </section>
        )
    }
}

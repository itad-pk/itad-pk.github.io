import React from 'react';
import { MDBContainer, MDBRow } from 'mdbreact';
import Speaker from './speaker';

export default class Speakers extends React.Component {
    render() {
        return (
            <section className="speakers" id="prelegenci">
                <MDBContainer>
                    <h2>Prelegenci</h2>
                    <MDBRow>
                        <Speaker name="Paweł Mstowski" img="Paweł_Mstowski.jpg" desc="Paweł to Senior Software Developer w ABB. Podczas swojej prelekcji opowie o rozproszonym uwierzytelnianiu użytkowników z użyciem OpenId Connect w aplikacjach webowych"/>
                        <Speaker name="Dominik Pawlik" img="Dominik_Pawlik.jpg" desc="Dominik pracuje jako PHP Developer w Ailleronie. Podczas swojej prelekcji opowie o dobrych nawykach pisania kodu oraz udzieli kilku wskazówek, dzięki którym się w nim nie zgubicie!"/>
                        <Speaker name="Katarzyna Olszówka" img="Katarzyna_Olszowka.jpg" desc="Kasia pracuje jako Specjalistka ds. Rozwoju Ludzi i Organizacji w firmie Ailleron. W swojej prelekcji opowie o sposobach rozwoju zawodowego."/>
                    </MDBRow>
                    <p className="soon">Już wkrótce przedstawimy kolejnych prelegentów</p>
                </MDBContainer>
            </section>
        );
    }
}
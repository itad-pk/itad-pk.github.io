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
                    </MDBRow>
                    <p className="soon">Już wkrótce przedstawimy kolejnych prelegentów</p>
                </MDBContainer>
            </section>
        );
    }
}
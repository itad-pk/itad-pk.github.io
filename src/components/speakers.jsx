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
                        <Speaker name="Łukasz Świszcz" img="Lukasz_Swiszcz.png" desc='Łukasz pracuje jako pracuje jako Technician Team Leader w firmie WEBCON. Podczas swojej prelekcji przedstawi rozwiązania firmy Microsoft. Tematem wykładu Łukasza jest "Azure Cognitive Services – inteligencja w chmurze Microsoft".'/>
                    </MDBRow>
                    <MDBRow>
                        <Speaker name="Jakub Bobek" img="Jakub_Bobek.png" desc="Kuba pracuje jako Software Developer w firmie NOVOMATIC Technologies Poland. Podczas swojej prelekcji pokaże jak stworzyć paczkę, z której skorzysta ktoś inny."/>
                        <Speaker name="Konrad Bielawski" img="Konrad_Bielawski.png" desc="Konrad pracuje jako Software Engineer w firmie NOVOMATIC Technologies Poland. Podczas swojej prelekcji poruszy temat DevOps'u i pokaże jak zautomatyzować swój kod."/>
                        <Speaker name="Andrzej Kubik" img="Andrzej_Kubik.png" desc="Andrzej pracuje jako Product Manager w firmie Motorola Solutions. Podczas swojej prelekcji opowie o  bezpieczeństwo danych w chmurze z perspektywy klienta."/>
                    </MDBRow>
                    <p className="soon">Już wkrótce przedstawimy kolejnych prelegentów</p>
                </MDBContainer>
            </section>
        );
    }
}
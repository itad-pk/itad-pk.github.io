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
                        <Speaker name="Łukasz Świszcz" img="Lukasz_Swiszcz.png" desc='Łukasz pracuje jako Technician Team Leader w firmie WEBCON. Podczas swojej prelekcji przedstawi rozwiązania firmy Microsoft. Tematem wykładu Łukasza jest "Azure Cognitive Services – inteligencja w chmurze Microsoft".'/>
                    </MDBRow>
                    <MDBRow>
                        <Speaker name="Jakub Bobek" img="Jakub_Bobek.png" desc="Kuba to programista działający głównie z .NET. Pracuje w firmie NOVOMATIC Technologies Poland, gdzie rozwija i utrzymuje rozproszony system wspierający branżę gamingową."/>
                        <Speaker name="Konrad Bielawski" img="Konrad_Bielawski.png" desc="Software Engineer w firmie NOVOMATIC Technologies Poland. W swojej prelekcji opowie o tym jak kultura DevOps może pomóc z prywatnym projektem."/>
                        <Speaker name="Andrzej Kubik" img="Andrzej_Kubik.png" desc="Andrzej pracuje jako Product Manager w firmie Motorola Solutions. Podczas swojej prelekcji opowie o  bezpieczeństwo danych w chmurze z perspektywy klienta."/>
                        <Speaker name="Błażej Drobniuh" img="Blazej_Drobniuh.png" desc="Błażej to Agile Coach pracujący w firmie Strix. Podczas spotkania pomoże znaleźć odpowiedzi na następujące pytania: Co odróżnia pewne organizacje od innych? Jaki wpływ na Twoją karierę i życie mogą mieć te różnice? Jak podczas rekrutacji rozpoznać, czy dana organizacja jest odpowiednia dla Ciebie?"/>
                    </MDBRow>
                </MDBContainer>
            </section>
        );
    }
}
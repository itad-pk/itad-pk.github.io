import React from "react";
import { Card, CardTitle, CardText } from "mdbreact";

const AboutCards = () => {
  return (
    <div>
      <Card
        className="p-3"
        style={{
          backgroundColor: "#1C2331",
          boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.60)"
        }}
      >
        <CardTitle className="text-center" style={{ color: "white" }}>
          O KONFERENCJI
        </CardTitle>
        <CardText style={{ color: "white" }}>
          Dzień IT Politechniki Krakowskiej to już kolejna, dziewiąta edycja
          konferencji o szeroko pojętej tematyce technologicznej. Podczas
          konferencji zaproszeni prelegenci przedstawią najnowsze trendy w
          branży IT. Ponadto zainteresowani studenci będą mogli poznać profile
          potencjalnych pracodawców, a także wziąć udział w konkursach z
          atrakcyjnymi nagrodami. Konferencja jest organizowana pod honorowym
          patronatem Prorektora dr hab. Inż. Marka Stanuszka.
        </CardText>
      </Card>
      <Card
        className="p-3 mt-3"
        style={{
          backgroundColor: "#1C2331",
          boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.60)"
        }}
      >
        <CardTitle className="text-center" style={{ color: "white" }}>
          CEL KONFERENCJI
        </CardTitle>
        <CardText style={{ color: "white" }}>
          Dzień IT Politechniki Krakowskiej ukierunkowany jest na studentów
          kierunków informatycznych i skupia się na tematyce technologii i
          programowania. Jako cel Grupa .NET Politechniki Krakowskiej stawia
          sobie przekazanie wartościowej i praktycznej wiedzy z branży IT.
          Konferencja jest także szansą nawiązania relacji z firmami z branży
          technologicznej.
        </CardText>
      </Card>
    </div>
  );
};

export default AboutCards;

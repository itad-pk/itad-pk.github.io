import React, { Component } from 'react';
import Steps, { Step } from 'rc-steps';
import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';

class Agenda extends Component {
  state = {  }
  render() {
    return (
      <div className="mt-5 mb-5">
        <h1 className="text-center">AGENDA</h1>
          <div className="col-6 offset-3">
            <Steps direction="vertical" current="1">
              <Step title="8:30 - Rejestracja" status="process" />
              <Step title="9:00 - Rozpoczęcie" status="process" />
              <Step title="9:15 - Fabryka mikroserwisów w praktyce, czyli o Azure Service Fabric" status="process" description="Krzysztof Seroka" />
              <Step title="10:00 - TensorFlow.js - Machine Learning w JavaScript" status="process" description="Łukasz Świszcz" />
              <Step title="11:00 - Nikt nie uwierzy, że to tylko JavaScript" status="process" description="Michał Osadnik" />
              <Step title="11:30 - Membrane Framework - strumieniowanie multimediów w oparciu o Elixir i BEAM" status="process" description="Bartosz Błaszków" />
              <Step title="12:00 - Automate everything!" status="process" description="Dawid Pacia" />
              <Step title="12:45 - Sprzedaj swoje rozwiązanie!" status="process" description="Błażej Drobniuch" />
              <Step title="13:30 - Lunch" status="process" />
              <Step title="14:15 - Programisto, rozwijaj się!" status="process" description="Cezary Piątek" />
              <Step title="15:00 - Metoda Test-Driven Development w C# w rozwiązaniu zadania Fizz Buzz (pokaz na żywo)" status="process" description="Grzegorz Gałęzowski" />
              <Step title="16:00 - Zakończenie" status="process" />
            </Steps>
        </div>
      </div>
    );
  }
}
 
export default Agenda;
import React, { Component } from "react";
import { View } from "mdbreact";

class Speakers extends Component {
  state = {};
  render() {
    return (
      <div style={{ marginTop: '5%' }} id="speakers">
        <h1 className="text-center">
          PRELEGENCI
        </h1>
        <div className="m-3">
          <div className="row justify-content-center mb-3">
            <View zoom>
              <a href="https://www.linkedin.com/in/krzysztofseroka/" target="_blank">
                <img
                  alt="img"
                  width={200}
                  className="img-fluid mb-3"
                  src={require("../photos/krzysztof.jpg")}
                />
              </a>
            </View>
            <div className="col-sm-6">
              <h4>Krzysztof Seroka</h4>
              <h5>SoftwareONE</h5>
              <h6>Architekt aplikacji webowych w krakowskim oddziale SoftwareONE. Obecnie zajmuje się budowaniem aplikacji webowych na bazie mikroserwisów w oparciu o platformę Microsoft Azure. Pasjonat czystego kodu, testów automatycznych i ogólnie automatyzacji - z tego względu nie ukrywa swojej miłości do wiersza poleceń. Popołudniami z dziećmi rządzi na placach zabaw, rozwija nawet swój profil parentingowy, a wieczorami wyżywa się technicznie zajmując się Azure, .NET Core i VIMem.</h6>
            </div>
          </div>
          <div className="row justify-content-center mb-3">
            <View zoom>
              <a href="https://www.linkedin.com/in/drobniuch/" target="_blank">
                <img
                  alt="img"
                  width={200}
                  className="img-fluid mb-3"
                  src={require("../photos/blazej.png")}
                />
              </a>
            </View>
            <div className="col-sm-6">
              <h4>Błażej Drobniuch</h4>
              <h5>NOVOMATIC</h5>
              <h6>Agile Coach w NOVOMATIC Technologies Poland S.A. Od 2011 związany z branżą IT. Entuzjasta Turkusowych Organizacji, Large Scale Scrum (LeSS), Management 3.0, oraz ruchu #NoEstimate.</h6>
            </div>
          </div>
          <div className="row justify-content-center mb-3">
            <View zoom>
              <a href="https://www.linkedin.com/in/paciadawid/" target="_blank">
                <img
                  alt="img"
                  width={200}
                  className="img-fluid mb-3"
                  src={require("../photos/dawid.jpg")}
                />
              </a>
            </View>
            <div className="col-sm-6">
              <h4>Dawid Pacia</h4>
              <h5>Brainly</h5>
              <h6>1/3 QA, 1/3 DevOps, 1/3 Lead. Last 10 years in Kraków. Tech freak following all the newest technologies (and implementing then on his own). Proudly and patriotically awarded as "People of Testing 2018". Leading and supporting the best and the happiest QA team! Actively speaking (and traveling) around the world (combining both passions). Organizer and originator of first regular Ukrainian QA meetup "UkrainQA".</h6>
            </div>
          </div>
          <div className="row justify-content-center mb-3">
            <View zoom>
              <a href="https://cezarypiatek.github.io/" target="_blank">
                <img
                  alt="img"
                  width={200}
                  className="img-fluid mb-3"
                  src={require("../photos/cezary.jpg")}
                />
              </a>
            </View>
            <div className="col-sm-6">
              <h4>Cezary Piątek</h4>
              <h5>Ailleron</h5>
              <h6>Pasjonat programowania, związany głównie z technologiami platformy .NET. Od kilku lat pracuje w krakowskim softwarehouse Ailleron, gdzie na co dzień zmaga się z tworzeniem aplikacji webowych z wykorzystaniem technologii ASP.NET i sporej dawki buzzwordów (CQRS/DDD/ES). Oprócz tematów architektonicznych chętnie podejmuje wyzwania w obszarach takich jak frontend, DevOps, bezpieczeństwo aplikacji oraz automatyzacja procesu wytwarzania oprogramowania.</h6>
            </div>
          </div>
          <div className="row justify-content-center mb-3">
            <View zoom>
              <a href="https://www.linkedin.com/in/%C5%82ukasz-%C5%9Bwiszcz-03411b71/" target="_blank">
                <img
                  alt="img"
                  width={200}
                  className="img-fluid mb-3"
                  src={require("../photos/lukasz.jpg")}
                />
              </a>
            </View>
            <div className="col-sm-6">
              <h4>Łukasz Świszcz</h4>
              <h5>WEBCON</h5>
              <h6>Team leader w WEBCON, od ponad 6 lat programuje i projektuje aplikacje w JavaScript i C#. Wielki fan nowych technologii, uczenia maszynowego i testowalnego kodu. Na bieżąco śledzi nowości w językach JavaScript i C# oraz trendy w tworzeniu stron i aplikacji internetowych.</h6>
            </div>
          </div>
          <div className="row justify-content-center mb-3">
            <View zoom>
              <a href="https://www.linkedin.com/in/grzegorz-ga%C5%82%C4%99zowski-2567266a/" target="_blank">
                <img
                  alt="img"
                  width={200}
                  className="img-fluid mb-3"
                  src={require("../photos/grzegorz.jpeg")}
                />
              </a>
            </View>
            <div className="col-sm-6">
              <h4>Grzegorz Gałęzowski</h4>
              <h5>Motorola Solutions</h5>
              <h6>Od dziesięciu lat pracuje w Motorola Solutions. Interesuje go wszystko, co pomaga w wytwarzaniu utrzymywalnego oprogramowania wysokiej jakości, szczególnie projektowanie obiektowe, ale również testowanie i komunikacja. Prelegent na polskich i zagranicznych konferencjach IT, autor darmowej książki on-line o tematyce Test-Driven Development pt. Test-Driven Development: Extensive Tutorial.</h6>
            </div>
          </div>
          <div className="row justify-content-center mb-3">
            <View zoom>
              <a href="https://www.linkedin.com/in/micha%C5%82-osadnik-%F0%9F%99%86-01a651138/" target="_blank">
                <img
                  alt="img"
                  width={200}
                  className="img-fluid mb-3"
                  src={require("../photos/michal.jpg")}
                />
              </a>
            </View>
            <div className="col-sm-6">
              <h4>Michał Osadnik</h4>
              <h5>Software Mansion</h5>
              <h6>Niepoprawny fan aplikacji mobilnych, Reacta Native, produktów firmy Apple i dobrego dizajnu. Programista w Software Mansion oraz student informatyki. Oprócz tego zapalony czytelnik niepopularnej literatury i miłośnik muzyki najstarszej.</h6>
            </div>
          </div>
          <div className="row justify-content-center mb-3">
            <View zoom>
              <a href="https://www.linkedin.com/in/bartosz-b%C5%82aszk%C3%B3w-1837a8136/" target="_blank">
                <img
                  alt="img"
                  width={200}
                  className="img-fluid mb-3"
                  src={require("../photos/bartek.jpg")}
                />
              </a>
            </View>
            <div className="col-sm-6">
              <h4>Bartosz Błaszków</h4>
              <h5>Software Mansion</h5>
              <h6>Software Engineer w Software Mansion. Programuje w językach Elixir i C. Członek zespołu rozwijającego framework multimedialny Membrane.</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Speakers;

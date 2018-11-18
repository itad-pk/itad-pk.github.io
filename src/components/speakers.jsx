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
              <img
                alt="img"
                width={200}
                className="img-fluid mb-3"
                src={require("../photos/krzysztof.jpg")}
              />
            </View>
            <div className="col-sm-6">
              <h4>Krzysztof Seroka</h4>
              <h5>SoftwareONE</h5>
              <h6>Architekt aplikacji webowych w krakowskim oddziale SoftwareONE. Obecnie zajmuje się budowaniem aplikacji webowych na bazie mikroserwisów w oparciu o platformę Microsoft Azure. Pasjonat czystego kodu, testów automatycznych i ogólnie automatyzacji - z tego względu nie ukrywa swojej miłości do wiersza poleceń. Popołudniami z dziećmi rządzi na placach zabaw, rozwija nawet swój profil parentingowy, a wieczorami wyżywa się technicznie zajmując się Azure, .NET Core i VIMem.</h6>
            </div>
          </div>
          <div className="row justify-content-center mb-3">
            <View zoom>
              <img
                alt="img"
                width={200}
                className="img-fluid mb-3"
                src="http://carerealtygroup.org/wp-content/uploads/2017/04/img-headshot-placeholder-male.jpg"
              />
            </View>
            <div className="col-sm-6">
              <h4>John Doe</h4>
              <h5>Firma IT</h5>
              <h6>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h6>
            </div>
          </div>
          <div className="row justify-content-center mb-3">
            <View zoom>
              <img
                alt="img"
                width={200}
                className="img-fluid mb-3"
                src="http://carerealtygroup.org/wp-content/uploads/2017/04/img-headshot-placeholder-male.jpg"
              />
            </View>
            <div className="col-sm-6">
              <h4>John Doe</h4>
              <h5>Firma IT</h5>
              <h6>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h6>
            </div>
          </div>
          <div className="row justify-content-center mb-3">
            <View zoom>
              <img
                alt="img"
                width={200}
                className="img-fluid mb-3"
                src="http://carerealtygroup.org/wp-content/uploads/2017/04/img-headshot-placeholder-male.jpg"
              />
            </View>
            <div className="col-sm-6">
              <h4>John Doe</h4>
              <h5>Firma IT</h5>
              <h6>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Speakers;

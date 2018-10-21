import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Container,
  Mask,
  View,
  Animation,
  Button
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  render() {
    return (
      <div>
        <header>
          <Router>
            <Container>
              <Navbar
                color="transparent"
                dark
                expand="md"
                fixed="top"
                scrolling
                className="z-depth-0"
                style={{ height: "100px" }}
              >
                <NavbarBrand href="/">
                  <img alt="img" height="80" src={require("../logo.png")} />
                </NavbarBrand>
                {!this.state.isWideEnough && (
                  <NavbarToggler onClick={this.onClick} />
                )}
                <Collapse isOpen={this.state.collapse} navbar>
                  <NavbarNav right>
                    <NavItem active>
                      <NavLink to="#">O KONFERENCJI</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#">AGENDA</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#">PRELEGENCI</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#">LOKACJA</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#">ITAD 2017</NavLink>
                    </NavItem>
                  </NavbarNav>
                </Collapse>
              </Navbar>
            </Container>
          </Router>

          <div style={{ height: "100vh" }}>
            <View className="random" src={require("../photos/background.jpg")}>
              <Mask
                overlay="stylish-strong"
                style={{ flexDirection: "column" }}
                className="flex-center text-white text-center"
              >
                <h1>
                  DZIEŃ IT POLITECHNIKI KRAKOWSKIEJ 2018
                  <br />
                  29 LISTOPADA 2018
                  <br />
                  SALA KONFERENCYJNO-WYSTAWOWA "KOTŁOWNIA"
                  <br />
                  UL. WARSZAWSKA 24 KRAKÓW
                </h1>
                <Animation type="pulse slow" infinite>
                  <Button size="lg" color="warning">
                    Zarejestruj sie
                  </Button>
                </Animation>
              </Mask>
            </View>
          </div>
        </header>
      </div>
    );
  }
}

export default Menu;

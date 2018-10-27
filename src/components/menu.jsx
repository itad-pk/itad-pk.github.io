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
import AnchorLink from 'react-anchor-link-smooth-scroll';
import $ from 'jquery';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
  }

  onClick = () => {
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
                style={{ height: "70" }}
              >
                <NavbarBrand href="/">
                  <img alt="img" width={70} src={require("../logo.png")} />
                </NavbarBrand>
                {!this.state.isWideEnough && (
                  <NavbarToggler id="toggler" onClick={this.onClick} />
                )}
                <Collapse isOpen={this.state.collapse} navbar>
                  <NavbarNav right>
                    <NavItem>
                      <AnchorLink className="nav-link" href='#about'>O KONFERENCJI</AnchorLink>
                    </NavItem>
                    <NavItem>
                      <AnchorLink className="nav-link" href='#about'>AGENDA</AnchorLink>
                    </NavItem>
                    <NavItem>
                      <AnchorLink className="nav-link" href='#speakers'>PRELEGENCI</AnchorLink>
                    </NavItem>
                    <NavItem>
                      <AnchorLink className="nav-link" href='#location'>LOKALIZACJA</AnchorLink>
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
                <h1 className="mt-5">
                  DZIEŃ IT POLITECHNIKI KRAKOWSKIEJ
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

  componentWillMount() {
    const that = this;
    $(document).on('click','.navbar-collapse',function(e) {
      that.onClick();
    });
    $(document).on('click','body',function(e) {
      that.onClick();
    });
  }
}

export default Menu;

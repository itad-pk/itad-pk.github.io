import React from 'react';
import { 
    MDBContainer, 
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    NavItem,
    MDBCollapse,
    NavbarNav
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    render() {
        return (
            <header>
                <Router>
                    <MDBContainer>
                        <MDBNavbar transparent dark expand="md" scrolling fixed="top">
                            <AnchorLink className="nav-link" href="#home">
                                    <img alt="img" width={70} src={require("../logo.png")} />
                            </AnchorLink>
                            <MDBNavbarToggler onClick={ this.onClick } />
                            <MDBCollapse isOpen = { this.state.collapse } navbar>
                            <NavbarNav right>
                                <NavItem>
                                    <AnchorLink className="nav-link" href='#o-konferencji'>O konferencji</AnchorLink>
                                </NavItem>
                                <NavItem>
                                    <AnchorLink className="nav-link" href='#prelegenci'>Prelegenci</AnchorLink>
                                </NavItem>
                                <NavItem>
                                    <AnchorLink className="nav-link" href='#agenda'>Agenda</AnchorLink>
                                </NavItem>
                                <NavItem>
                                    <AnchorLink className="nav-link" href='#itad-2018'>ITAD 2018</AnchorLink>
                                </NavItem>
                                <NavItem>
                                    <AnchorLink className="nav-link" href='#lokalizacja'>Lokalizacja</AnchorLink>
                                </NavItem>
                            </NavbarNav>
                            </MDBCollapse>
                        </MDBNavbar>
                    </MDBContainer>
                </Router>
            </header>
        );
    }
}
import React from 'react';
import { MDBContainer } from 'mdbreact';

export default class Footer extends React.Component {
    render() {
        return (
            <footer>
                <MDBContainer>
                    Organizator: <b><a href="https://www.facebook.com/grupa.pk.net/" target="_blank" rel="noopener noreferrer">Grupa .NET PK</a></b>
                </MDBContainer>
            </footer>
        )
    }
}

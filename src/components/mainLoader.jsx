import React, { Component } from 'react';
import { RingLoader, BarLoader } from 'react-spinners';
import { css } from 'react-emotion';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class MainLoader extends Component {
  render() { 
    return ( 
      <div className="text-center" style={{width: 'auto', marginTop: '15%'}}>
        <RingLoader
          className={override}
          sizeUnit={"px"}
          size={250}
          color={'#005EA6'} />
          <BarLoader 
            className={override}
            sizeUnit={"px"}
            height={10}
            width={300}
            color={'#005EA6'} />
          <h1 className="mt-3 blue-grey-text" style={{fontFamily: 'monospace'}}>
            <img width={40} alt="logo-itad" src={require("../logo.png")}/> ITAD PK
          </h1>
      </div>
    );
  }
}
 
export default MainLoader;

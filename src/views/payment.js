import React from 'react';
// import { NavBar } from '../components';
import NFC from '../assets/nfc.png';

const Payment = () => (
  <div id="app" className="d-flex flex-column h-100">

    <div
      style={{
        display: 'inline-flex',
        justifyContent: 'space-evenly',
        padding: '5px',
      }}
    >
      <a href="/search">
        <button className="btn btn-primary btn-block">Done</button>
      </a>
      <img src={NFC} className="card-img-center" />
    </div>
  </div>
);

export default Payment;

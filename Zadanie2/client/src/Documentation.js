import React from 'react';
import { Link } from 'react-router-dom';
import arch from './arch.png';

export default () => {
  return (
    <div>
      <Link to="/">Go back home</Link>
      <br />
      architektura usługi "Geo"
      <br />
      <img src={arch} alt="arch" />
    </div>
  );
};

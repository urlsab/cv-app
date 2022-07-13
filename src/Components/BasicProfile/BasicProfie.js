import React from 'react';
import { InitialState } from '../../InitialState/InitialState';

const BasicProfile = () => (
  <div>
    <h4>[from BasicProfile.js] </h4>
    <h6> [from InitialState.js inside BasicProfie.js] --- {InitialState.city} </h6> 
  </div>
);

export default BasicProfile;
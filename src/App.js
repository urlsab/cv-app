import React from 'react';
import { Routes ,Route } from 'react-router-dom';

import './App.css';
import PostUserInput from './Components/FullProfile/PostUserInput';
import PullData from './Components/PullData/PullData';
import OneData from './Components/OneData/OneData';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  return (
      <React.Fragment>
        <Navbar/>
        <Routes>
          <Route path='/oneData' element={<OneData/>} />
          <Route path='/allData' element={<PullData/>} />
          <Route path='/postInput' element={<PostUserInput/>} />
        </Routes>       
      </React.Fragment>
  );
}

export default App; 
import './App.css';
import BasicProfile from './Components/BasicProfile/BasicProfie';
import Resume from './Components/Resume/Resume';
import PostUserInput from './Components/FullProfile/PostUserInput';
// import Routing from './Routes/Routing';
import React from 'react';
import PullData from './Components/PullData/PullData';

function App() {
  return (
      <React.Fragment>
        {/* <Routing/> */}
        <Resume/>
        <PostUserInput/>
        <BasicProfile/>
        <PullData/>
      </React.Fragment>
  );
}

export default App; 
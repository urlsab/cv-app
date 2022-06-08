import './App.css';
import BasicProfile from './Components/BasicProfile/BasicProfie';
import Resume from './Components/Resume/Resume';
import HooksTry from './Components/FullProfile/HooksTry';

function App() {
  return (
    <div className="App">
      <p>[from app.js]</p>
      <Resume/>
      <HooksTry/>
      <BasicProfile/>
    </div>
  );
}

export default App; 
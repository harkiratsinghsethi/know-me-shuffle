import logo from './logo.svg';
import './App.css';
import HomePage from "./pages/Playground/Playground";
import ParticpantPage from "./pages/ParticipantsPage/AddFact";
import { Route, Switch } from 'react-router-dom';

import CreateRoom from './pages/CreateRoom/CreateRoom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Switch>
            <Route key={Math.random()} path="/playground" render={() => <HomePage />} />
            <Route key={Math.random()} path="/" render={() => <CreateRoom />} />


          </Switch>
        </div>
        {/* <CreateRoom/> */}
        {/* <HomePage/>  */}

        {/* <ParticpantPage/>  */}
      </header>
    </div>
  );
}

export default App;

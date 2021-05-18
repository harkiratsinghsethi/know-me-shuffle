import logo from './logo.svg';
import './App.css';
import HomePage from "./pages/HomePage";
import ParticpantPage from "./pages/ParticipantsPage/AddFact";
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <HomePage/>
       <ParticpantPage/>
      </header>
    </div>
  );
}

export default App;

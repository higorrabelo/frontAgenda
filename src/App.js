import './App.css';
import BarraMenu from './compontents/BarraMenu';
import { Login } from './compontents/Login';

function App() {
  return (
    <div>
      <BarraMenu  status='false' brand="Agenda Pessoal" />
      <header className="App-header">
      <Login />
      </header>
      
    </div>
  );
}

export default App;

import './App.css';
import Main from './components/Main';
import Nav from './components/Nav';
import { useEffect } from 'react';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Main />
      </header>
    </div>
  );
}

export default App;
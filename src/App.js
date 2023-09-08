import './App.css';
import Main from './components/Main';
import Nav from './components/Nav';
import { useEffect } from 'react';

function App() {

    // after component mounted
    useEffect(() => {
      flipStarter();
    }, []);

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

let currentCardFaceToggle = true; // meaining front; false meaning back

function flipStarter() {
  console.log("Flip Starter invoked...");

  const inner_card = document.getElementById("rotating");

  inner_card.onload = flip();

  function flip() {
    setInterval(()=> {
      console.log("Flipping...");
  
      if(currentCardFaceToggle) {
        inner_card.style.transform = "rotateX(180deg)";
      }else {
        inner_card.style.transform = "rotateX(0deg)";
      }
  
      currentCardFaceToggle = !currentCardFaceToggle;
  
    }, 3000);
  }

}
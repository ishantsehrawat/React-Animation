import logo from './logo.svg';
import { useRef, useEffect } from 'react';
import {gsap, Power3} from 'gsap';
import './App.css';

function App() {
  let logoitem  = useRef(null);
  let textitem = useRef(null);

  useEffect(() => {
    console.log(logoitem);
    gsap.to(
      ".App-logo",
      .8,
      {
        opacity: 1,
        y: -20,
        ease: Power3.easeOut
      }
    )
    gsap.to(
      ".text",
      .8,
      {
        opacity: 1,
        y: -20,
        ease: Power3.easeOut,
        delay: 0.2
      }
    )
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} 
        ref={el => {logoitem = el}}
        className="App-logo" alt="logo" />
        <p ref={el => {textitem = el}} className="text">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

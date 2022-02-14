import { useEffect, useState } from 'react';
import { gsap, Power3 } from 'gsap';
import { useRef } from 'react';
import './App.css';
import { TweenMax } from 'gsap/gsap-core';


function App() {
  let app = useRef(null);
  let circle = useRef(null);
  let circleRed = useRef(null);
  let circleBlue = useRef(null);

  const [state, setState] = useState(false);
  
  const handleExpand = () => {
    gsap.to(circleRed, .8, {width: 200, height: 200, ease: Power3.easeOut})
    setState(true)
  }
  const handleShrink = () => {
    gsap.to(circleRed, .8, {width: 75, height: 75, ease: Power3.easeOut})
    setState(false)
  }

  useEffect(() => {
    gsap.to(".App", 0, {css: {visibility: 'visible'}})
    // gsap.from(circle, .8, {opacity: 0, x: 80, ease: Power3.easeOut}) 
    // gsap.from(circleRed, .8, {opacity: 0, x: 80, ease: Power3.easeOut, delay: .2})    
    // gsap.from(circleBlue, .8, {opacity: 0, x: 80, ease: Power3.easeOut, delay: .4})    
    TweenMax.staggerFrom([circle, circleRed, circleBlue], .8, {opacity: 0, x: 80, ease: Power3.easeOut}, .2)
  }, [])

  return (
    <div className="App" ref={el => {app = el}}>
      <header className="App-header">
        <div className='circle-container'>
          <div 
          ref={el => {circle = el}}
          className='circle'></div>
          <div 
          ref={el => {circleRed = el}}
          onClick={state !== true ? handleExpand : handleShrink}
          className='circle red'></div>
          <div 
          ref={el => {circleBlue = el}}
          className='circle blue'></div>
        </div>
      </header>
    </div>
  );
}

export default App;

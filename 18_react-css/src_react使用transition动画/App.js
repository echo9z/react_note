import React, { useState } from 'react'
import TransitionCom from './components/TransitionCom';
import CSSTransitionCom from './components/CSSTransitionCom';
import logo from './logo.svg'
import SwitchTransitionCom from './components/SwitchTransitionCom';
import './App.css'
import TransitionGroupCom from './components/TransitionGroupCom';

function App() {
  const [flag, setFlag] = useState(true)
  return (
    <div className="App" style={{margin: 50}}>
      {/* <button onClick={() => setFlag(!flag)}>显示隐藏</button> <br /> */}
      {/* <TransitionCom in={flag} /> */}
      {/* <CSSTransitionCom in={flag} >
        <img alt='#' src={logo} width={150} height={150} />
      </CSSTransitionCom> */}
      {/* <SwitchTransitionCom /> */}
      <TransitionGroupCom />
    </div>
  );
}

export default App;

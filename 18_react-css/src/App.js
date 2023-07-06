import React, { useState } from 'react'
import TransitionCom from './components/TransitionCom';
import CSSTransitionCom from './components/CSSTransitionCom';
import logo from './logo.svg'

function App() {
  const [flag, setFlag] = useState(true)
  return (
    <div className="App">
      <button onClick={() => setFlag(!flag)}>显示隐藏</button> <br />
      {/* <TransitionCom in={flag} /> */}
      <CSSTransitionCom in={flag} >
        <img alt='#' src={logo} width={150} height={150} />
      </CSSTransitionCom>
    </div>
  );
}

export default App;

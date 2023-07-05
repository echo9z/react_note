import React, { useState } from 'react'
import TransitionCom from './components/TransitionCom';
// import logo from './logo.svg'

function App() {
  const [flag, setFlag] = useState(false)
  return (
    <div className="App">
      <button onClick={() => setFlag(!flag)}>显示隐藏</button> <br />
      <TransitionCom in={flag} />
      {/* {flag && <img alt='#' src={logo} width={150} height={150} />} */}
      {/* <CSSTransition in={flag} >
        <img alt='#' src={logo} width={150} height={150} />
      </CSSTransition> */}
    </div>
  );
}

export default App;

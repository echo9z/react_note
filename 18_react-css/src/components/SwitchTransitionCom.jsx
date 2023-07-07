import {useState, useRef} from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import './SwitchTransitionC.css'

const modes = ["out-in", "in-out"];
export default function SwitchTransitionCom() {
  const [mode, setMode] = useState('out-in')
  const [state, setState] = useState(false)
  const GoodbyeRef = useRef(null)
  const HelloRef = useRef(null)
  const nodeRef = state ? GoodbyeRef : HelloRef
  return (
    <div>
      <h3>Mode: {mode}</h3>
      <div>
        {modes.map(item => (
          <label key={item} >
            <input type='radio' checked={item === mode}
              value={item} onChange={e => setMode(e.target.value)}
            /> {item}
          </label>
        ))}
      </div>
      <div className='main'>
        <SwitchTransition mode={mode}>
          <CSSTransition
            key={state ? "Goodbye, world!" : "Hello, world!"}
            timeout={1000}
            nodeRef={nodeRef}
            // addEndListener={(done) => nodeRef.current.addEventListener("transitionend", done, false) }
            classNames='fade'>
            <div ref={nodeRef}>
              <button onClick={() => setState(state => !state)}>
                {state? 'Goodbye, world!': "Hello, world!"}
              </button>
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </div>
  )
}

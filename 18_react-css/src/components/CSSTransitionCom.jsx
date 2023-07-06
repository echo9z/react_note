import React, { useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import './CSSTransitionC.css'

export default function CSSTransitionCom({ children, in: inProp }) {
  const nodeRef = useRef(null)
  return (
    <div>
      <CSSTransition nodeRef={nodeRef} in={inProp}
        timeout={1500} classNames="my-tran" unmountOnExit={true} appear
        >
        <div ref={nodeRef} style={{backgroundColor: 'pink', display: 'inline-block'}}>
          {/* I'll receive my-node-* classes <br/> */}
          {children}
        </div>
      </CSSTransition>
    </div>
  )
}

import { useRef } from 'react'
import { Transition } from 'react-transition-group'

const duration = 300 // 延迟300ms执行
// 默认style
const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`, // 对opacity做过渡效果
  opacity: 0,
}
const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};
export default function TransitionCom({ in: inProp }) {
  const nodeRef = useRef(null);
  return (
    <Transition nodeRef={nodeRef} in={inProp} timeout={duration}>
      {/* 
       */}
      {state => (
        <div ref={nodeRef} style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}>
          I'm a fade Transition!
        </div>
      )}
    </Transition>
  );
}

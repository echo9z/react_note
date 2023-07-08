import {useState, createRef} from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import {v4 as uuid} from 'uuid'
import './TransitionGroupC.css'

export default function TransitionGroupCom() {
  const [list, setList] = useState([
    {
      id: uuid(),
      text: 'Buy eggs',
      nodeRef: createRef(null),
    },
    {
      id: uuid(),
      text: 'Pay bills',
      nodeRef: createRef(null),
    },
    {
      id: uuid(),
      text: 'Invite friends over',
      nodeRef: createRef(null),
    }
  ])
  const onEnter = (e) =>{
    const text = e.target.value.trim()
    if(e.keyCode !== 13 || text === '') return;
    console.log(e.keyCode );
    e.target.value = ''
    setList(v => [...v,  {
      id: uuid(),
      text,
      nodeRef: createRef(null),
    }])
  }
  return (
    <div>
      <input type="text" onKeyDown={onEnter} />
      {/* 一组列表都需要动画 */}
      <TransitionGroup component='ul'>
        {list.map(({id, text, nodeRef}) => (
          // 为每个li元素添加动画
          <CSSTransition key={id} timeout={750} appear
            nodeRef={nodeRef}
            classNames="item">
            <li ref={nodeRef}>
              {text}
              <span onClick={() => {
                setList(v => v.filter(item => item.id !== id))
              }}>❌</span>
            </li>
          </CSSTransition>)
        )}
      </TransitionGroup>
    </div>
  )
}

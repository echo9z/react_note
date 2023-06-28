import React, { useContext, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import Context from '../todo-context'

function TodoListItem({ id, content, done }) {
  const [editing, setEditing] = useState(false)
  const [mouseFlag, setMouseFlag] = useState(false)
  const editRef = useRef(null)
  useEffect(() => {
    editing && editRef.current.focus()
  }, [editing])

  const { 
    changeDone,
    changeContent,
    deleteTodo
  } = useContext(Context)

  const doubleLabel = () => {
    setEditing(true)
    editRef.current.value = content
    // editRef.current.focus()
  }

  const changeTodoContext = (e, todoId) => {
    setEditing(false)
    changeContent(todoId, e.target.value)
  }
  const onEnter = (e, todoId) => {
    if (e.keyCode !== 13) return;
    changeTodoContext(e, todoId)
  }

  return (
    <li className={`${done && 'completed'} ${mouseFlag && 'mouse'} ${editing && 'editing'}`}>
      <div className="view">
        <input className="toggle" type="checkbox"
          checked={done}
          onChange={(e) => changeDone(id, e.target.checked)} />
        <label onDoubleClick={doubleLabel}
          onMouseEnter={() => setMouseFlag(true)}
          onMouseLeave={() => setMouseFlag(false)}
        >{content}</label>
        <button className="destroy" onClick={e => deleteTodo(id)}></button>
      </div>
      <input className="edit" ref={editRef} 
        onBlur={e => changeTodoContext(e, id)}
        onKeyDown={e => onEnter(e, id)} />
    </li>
  )
}

TodoListItem.propTypes = {
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired
}

export default TodoListItem

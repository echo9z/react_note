import React, { useContext, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import Context from '../todo-context'

function TodoListItem({ todo }) {
  const [editing, setEditing] = useState(false)
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
    editRef.current.value = todo.content
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
    <li className={`${todo.done && 'completed'} ${editing && 'editing'}`}>
      <div className="view">
        <input className="toggle" type="checkbox"
          checked={todo.done}
          onChange={(e) => changeDone(todo.id, e.target.checked)} />
        <label onDoubleClick={doubleLabel}>{todo.content}</label>
        <button className="destroy" onClick={e => deleteTodo(todo.id)}></button>
      </div>
      <input className="edit" ref={editRef} 
        onBlur={e => changeTodoContext(e, todo.id)}
        onKeyDown={e => onEnter(e, todo.id)} />
    </li>
  )
}

TodoListItem.propTypes = {}

export default TodoListItem

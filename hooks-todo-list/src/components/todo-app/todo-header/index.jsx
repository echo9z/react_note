import React, {useState} from 'react'
import PropTypes from 'prop-types'

function TodoHeader({onEnter}) {
  const [content, setContent] = useState('')
  const keyDown = (e) => {
    if (e.keyCode !== 13) return;
    if (e.target.value.trim() === '') return;
    onEnter(content)
    setContent('')
  }
  return (
    <header className="header">
      <h1>hooks todos</h1>
      <input className="new-todo"
        value={content}
        onChange={e => setContent(e.target.value)}
        onKeyDown={keyDown}
        placeholder="What needs to be done?" />
    </header>
  )
}

TodoHeader.propTypes = {
  onEnter: PropTypes.func.isRequired
}

export default TodoHeader

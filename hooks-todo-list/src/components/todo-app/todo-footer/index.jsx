import React from 'react'
import PropTypes from 'prop-types'

function TodoFooter({type, setType, total, showClearCompleted, clearCompleted}) {
  return (
    <footer className="footer">
      <span className="todo-count"><strong>{total}</strong> item left</span>
      <ul className="filters">
        <li>
          <a className={type === 'all' ? "selected" : '' }
            onClick={() => setType('all')} href="#/">All</a>
        </li>
        <li>
          <a className={type === 'active' ? "selected" : '' }
            onClick={() => setType('active')} href="#/active">Active</a>
        </li>
        <li>
          <a className={type === 'completed' ? "selected" : '' }
            onClick={() => setType('completed')} href="#/completed">Completed</a>
        </li>
      </ul>
      { showClearCompleted && <button className="clear-completed"
        onClick={clearCompleted}>Clear completed</button>}
    </footer>
  )
}

TodoFooter.propTypes = {
  type: PropTypes.string.isRequired,
  setType: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  showClearCompleted: PropTypes.bool.isRequired,
  clearCompleted: PropTypes.func.isRequired
}

export default TodoFooter

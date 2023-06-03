import React, { Component } from 'react'

export class TodoFooter extends Component {
  render() {
    const {todoCount, showClearCompleted, clearDoneTodo, todoStatus, type} = this.props
    return (
      // {/* <!-- This footer should be hidden by default and shown when there are todos --> */}
      <footer className="footer">
        {/* <!-- This should be `0 items left` by default --> */}
        <span className="todo-count"><strong>{todoCount}</strong> item left</span>
        {/* <!-- Remove this if you don't implement routing --> */}
        <ul className="filters">
          <li>
            <a className={ type === 'all'? `selected`: ''} href="#/" onClick={e => todoStatus('all')}>All</a>
          </li>
          <li>
            <a className={ type === 'active'? `selected`: ''} href="#/active" onClick={e => todoStatus('active')} >Active</a>
          </li>
          <li>
            <a className={ type === 'completed'? `selected`: ''} href="#/completed" onClick={e => todoStatus('completed')}>Completed</a>
          </li>
        </ul>
        {/* <!-- Hidden if no completed items are left ↓ --> */}

        {
          showClearCompleted ? <button className="clear-completed" onClick={clearDoneTodo} >Clear completed</button> : null
        }
      </footer>
    )
  }
}

export default TodoFooter
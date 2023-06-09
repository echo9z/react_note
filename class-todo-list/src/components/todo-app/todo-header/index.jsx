import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoHeader extends Component {
  onEnter(e) {
    if (e.keyCode !== 13) return
    // 回车
    const {addTodo} = this.props
    addTodo(e.target.value)
  }
  onChange(e) {
    const {change} = this.props
    change(e.target.value)
  }
  render() {
    const {newTodo} = this.props
    return (
      <header className="header">
        <h1>class todos</h1>
        <input className="new-todo"
          onKeyDown={this.onEnter.bind(this)}
          onChange={this.onChange.bind(this)}
          value={newTodo}
          placeholder="What needs to be done?" autoFocus />
      </header>
    )
  }
}

TodoHeader.propTypes = {
  newTodo: PropTypes.string,
  addTodo: PropTypes.func,
  change: PropTypes.func
}

export default TodoHeader
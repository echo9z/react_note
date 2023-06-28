import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoHeader extends Component {
  onEnter(e) {
    if (e.keyCode !== 13) return
    if(e.target.value.trim() === '') return
    // 回车
    const {addTodo} = this.props
    addTodo(e.target.value)
    e.target.value = ''
  }
  render() {
    return (
      <header className="header">
        <h1>class todos</h1>
        <input className="new-todo"
          onKeyDown={this.onEnter.bind(this)}
          placeholder="What needs to be done?" autoFocus />
      </header>
    )
  }
}

TodoHeader.propTypes = {
  addTodo: PropTypes.func.isRequired,
}

export default TodoHeader
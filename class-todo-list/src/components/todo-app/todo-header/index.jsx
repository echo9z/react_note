import React, { Component } from 'react'

export class TodoHeader extends Component {
  onEnter(e) {
    // 回车
    if(e.keyCode === 13) {
      const {addTodo} = this.props
      addTodo(e.target.value)
    };
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

export default TodoHeader
import React, { Component } from 'react'
import TodoContext from '../todo-context'
import PropTypes from 'prop-types'

export class TodoListItem extends Component {
  editRef = React.createRef()
  state = {
    editing: false,
  }
  onDouble() {
    return (e) => {
      this.setState(prevState => ({editing: true}), () => {
        this.editRef.current.focus()
      })
    }
    // setTimeout(() => {this.editRef.current.focus()}, 10)
  }
  onBlur(e) {
    this.setState(prevState => ({editing: false}))
  }
  onEnter(e) {
    if (e.keyCode !== 13) return;
    this.setState(prevState => ({editing: false}))
  }
  render() {
    const {editing} = this.state
    const {item} = this.props
    return (
      <TodoContext.Consumer>
        {
          (context) => (
            <li className={`${item.done ? 'completed': ''} ${editing ? 'editing':''}`}>
              {/* <!-- These are here just to show the structure of the list items --> */}
              {/* <!-- List items should get the className `editing` when editing and `completed` when marked as completed --> */}
              <div className="view">
                <input className="toggle" type="checkbox" checked={item.done}
                  onChange={(e) => context.changeDone(item.id, e.target.checked)} />
                <label onDoubleClick={this.onDouble()} >{item.content}</label>
                <button className="destroy" onClick={() => context.delTodo(item.id)}></button>
              </div>
              <input className="edit" ref={this.editRef}
                onBlur={this.onBlur.bind(this)}
                onKeyUp={this.onEnter.bind(this)}
                onChange={(e) => context.changeTodo(item.id, e.target.value)}
                value={item.content} />
            </li>
          )
        }
      </TodoContext.Consumer>
    )
  }
}

TodoListItem.propTypes = {
  item: PropTypes.object,
}

export default TodoListItem
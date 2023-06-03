import React, { Component } from 'react'
import TodoListItem from '../todo-list-item'

export class TodoList extends Component {

  toggleAllChange(e) {
    this.props.changeToggle(e.target.checked)
  }

  render() {
    const {list, toggle} = this.props
    return (
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" checked={toggle} onChange={this.toggleAllChange.bind(this)} />
        {/* 全选 */}
        <label htmlFor="toggle-all" >Mark all as complete</label>
        <ul className="todo-list">
          {/* <!-- These are here just to show the structure of the list items --> */}
          {/* <!-- List items should get the className `editing` when editing and `completed` when marked as completed --> */}
          {list.map(listItem => {
            return <TodoListItem key={listItem.id} item={listItem} />
          })}
        </ul>
      </section>
    )
  }
}

export default TodoList
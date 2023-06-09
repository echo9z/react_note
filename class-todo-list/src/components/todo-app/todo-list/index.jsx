import React, { Component } from 'react'
import TodoListItem from '../todo-list-item'
import PropTypes from 'prop-types'
// import eventBus from '@/utils/eventBus'
export class TodoList extends Component {
  state = {
    typeBus: 'all'
  }
  // componentDidMount() {
  //   eventBus.on('type', value => this.setState({typeBus: value}))
  //   // eventBus.on('type', type => console.log(type))
  // }
  // componentWillUnmount() {
  //   eventBus.off('type', () => {})
  // }

  toggleAllChange(e) {
    this.props.changeToggle(e.target.checked)
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const {typeBus} = this.state
    const {list, toggle, type} = this.props
    let newList = []
    console.log(type);
    if (type === 'active') {
      newList = list.filter(todo => !todo.done)
    } else if (type === 'completed') {
      newList = list.filter(todo => todo.done)
    } else {
      newList = list
    }
    // eventBus.emit('todoCount', newList.length)
    return (
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" checked={toggle} onChange={this.toggleAllChange.bind(this)} />
        {/* 全选 */}
        <label htmlFor="toggle-all" >Mark all as complete</label>
        <ul className="todo-list">
          {/* <!-- These are here just to show the structure of the list items --> */}
          {/* <!-- List items should get the className `editing` when editing and `completed` when marked as completed --> */}
          {newList.map(listItem => {
            return <TodoListItem key={listItem.id} item={listItem} />
          })}
        </ul>
      </section>
    )
  }
}

TodoList.propTypes = {
  list: PropTypes.array,
  toggle: PropTypes.bool,
  type: PropTypes.string,
  changeToggle: PropTypes.func
}

export default TodoList
import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import eventBus from '@/utils/eventBus'

export class TodoFooter extends Component {
  state = {
    type: 'all',
    // count: 0
  }
  // onEmitEvent(type){
  //   eventBus.emit('type', type)
  //   this.setState({type})
  // }
  // componentDidMount() {
  //   eventBus.on('todoCount', count => {
  //     console.log(count);
  //     this.setState({count})
  //   })
  //   // eventBus.on('type', type => console.log(type))
  // }
  // componentWillUnmount() {
  //   eventBus.off('todoCount', () => {})
  // }
  render() {
    const {todoCount, showClearCompleted, clearDoneTodo, todoStatus, type} = this.props
    return (
      // {/* <!-- This footer should be hidden by default and shown when there are todos --> */}
      <footer className="footer">
        {/* <!-- This should be `0 items left` by default --> */}
        <span className="todo-count"><strong>{todoCount}</strong> item left</span>
        {/* <!-- Remove this if you don't implement routing --> */}
        <ul className="filters">
          {/* <li>
            <a className={ this.state.type === 'all'? `selected`: ''} href="#/" onClick={e => this.onEmitEvent('all')}>All</a>
          </li>
          <li>
            <a className={ this.state.type === 'active'? `selected`: ''} href="#/active" onClick={e => this.onEmitEvent('active')} >Active</a>
          </li>
          <li>
            <a className={ this.state.type === 'completed'? `selected`: ''} href="#/completed" onClick={e => this.onEmitEvent('completed')}>Completed</a>
          </li> */}
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
          showClearCompleted && <button className="clear-completed" onClick={clearDoneTodo} >Clear completed</button>
        }
      </footer>
    )
  }
}

TodoFooter.propTypes = {
  todoCount: PropTypes.number,
  showClearCompleted: PropTypes.bool,
  clearDoneTodo: PropTypes.func,
  todoStatus: PropTypes.func,
  type: PropTypes.string,
}

export default TodoFooter
import React,{useMemo} from 'react'
import PropTypes from 'prop-types'
import TodoListItem from '../todo-list-item'

function TodoList({todos, toggleAll}) {
  const visibleTodos = useMemo(
    () => todos,
    [todos]
  );
  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox"
        checked={visibleTodos.every(todo => todo.done)}
        onChange={e => toggleAll(e.target.checked)} />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {visibleTodos.map((todo) => <TodoListItem key={todo.id} todo={todo} />) }
      </ul>
    </section>
  )
}

TodoList.propTypes = {}

export default TodoList

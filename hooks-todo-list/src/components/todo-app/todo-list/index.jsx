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
        checked={ visibleTodos.length === visibleTodos.filter((todo) => todo.done).length && visibleTodos.length !== 0 }
        onChange={e => toggleAll(e.target.checked)} />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {visibleTodos.map((todo) => <TodoListItem key={todo.id} {...todo} />) }
      </ul>
    </section>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleAll: PropTypes.func.isRequired
}

export default TodoList

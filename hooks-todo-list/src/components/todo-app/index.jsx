import React, { useState } from 'react'
import './index.css'
import TodoHeader from './todo-header'
import TodoFooter from './todo-footer'
import TodoList from './todo-list'
import Context from './todo-context'

function TodoApp() {
  const [type, setType] = useState('all')
  const [todos, setTodos] = useState([
    {id:1, content:"Taste JavaScript", done:true},
    {id:2, content:"Buy a unicorn", done:false}
  ])

  const filterTodos = (todos, type) => {
    return todos.filter((todo) => {
      if(type === 'all') return true; // 所有todo直接返回
      else if(type === 'active') return !todo.done;
      else if(type === 'completed') return todo.done;
    })
  }

  const onEnterAddTodo = (content) => {
    const todo = { id: todos.length+1, content, done: false}
    setTodos([todo, ...todos])
  }
  const changeDone = (todoId, done) => {
    setTodos(v => v.map(todo => {
      if(todo.id === todoId) {
        todo.done = done
        return todo
      }
      return todo
    }))
  }
  const changeContent = (todoId, content) => {
    setTodos(v => v.map(todo => {
      if(todo.id === todoId) {
        todo.content = content
        return todo
      }
      return todo
    }))
  }
  const deleteTodo = (todoId) => {
    setTodos(v => v.filter(item => item.id !== todoId))
  }

  const toggleAll = (checked) => {
    console.log("🚀 ~ file: index.jsx:50 ~ toggleAll ~ checked:", checked)
    setTodos(v => v.map(item => {
      item.done = checked
      return item
    }))
  }

  const showClearCompleted = () =>{
    // array.some 数组中的元素有一个满足判断条件，则返回true
    return filterTodos(todos, type).some((todo) => todo.done)
  }

  const clearCompleted = () => {
    setTodos(v => v.filter(todo => !todo.done))
  }

  return (
    <div>
      <section className="todoapp">
        <TodoHeader onEnter={onEnterAddTodo} />
        <Context.Provider value={{
          changeDone,
          changeContent,
          deleteTodo
        }}>
          <TodoList
            todos={filterTodos(todos, type)}
            type={type}
            toggleAll={toggleAll}/>
        </Context.Provider>
        <TodoFooter
          total={filterTodos(todos, type).length}
          type={type} setType={setType}
          showClearCompleted={showClearCompleted()}
          clearCompleted={clearCompleted} />
      </section>
    </div>
  )
}

export default TodoApp

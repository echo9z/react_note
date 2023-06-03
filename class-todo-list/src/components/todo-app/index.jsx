import React, { Component } from 'react'
import './index.css'
import TodoHeader from './todo-header'
import TodoFooter from './todo-footer'
import TodoList from './todo-list'
import TodoContext from './todo-context'
export class TodoApp extends Component {
  state = {
    newTodo: '', // 输入的文本框
    // toggle: false, // 是否全选
    todos: [
      {id:1, content:"Taste JavaScript", done:true},
      {id:2, content:"Buy a unicorn", done:false}
    ]
  }
  // 修改输入的文本框
  changeNewTodo (newTodo) {
    this.setState(() => ({newTodo}))
  }

  toggle(){
    return this.state.todos.every((todo) => todo.done)
  }
  showClearCompleted(){
    return this.state.todos.some((todo) => todo.done)
  }

  // 切换
  changeToggle(toggle){
    console.log(toggle);
    this.setState(prevState => {
      return {
        todos: prevState.todos.map(todo => {
          // todo.done = !prevState.toggle
          todo.done = toggle
          return todo
        })}
    })
  }
  addTodo(newTodo){
    console.log(newTodo);
    const todo = {id: this.state.todos.length+1, content: newTodo, done: false}
    this.setState(prevState => {
      return { 
        todos: [todo, ...prevState.todos],
        newTodo: ''
      }
    })
  }
  changeTodo = (todoId, content) => {
    console.log("🚀 ~ file: index.jsx:48 ~ TodoApp ~ todoId, content:", todoId, content)
    this.setState(prevState => ({ 
      todos: prevState.todos.map((item) => {
        if(item.id === todoId) item.content = content
        return item
      })
    }))
  }
  changeDone = (todoId, done) => {
    // console.log("🚀 ~ file: index.jsx:46 ~ TodoApp ~ changeDone ~ todoId:", todoId)
    this.setState(prevState => ({ 
      todos: prevState.todos.map((item) => {
        if(item.id === todoId) item.done = done
        return item
      })
    }))
  }

  delTodo = (todoId) => {
    this.setState(prevState => ({ todos: prevState.todos.filter(item => item.id !== todoId) }))
  }

  // 统计done不为true
  todoCount() {
    return this.state.todos.filter(todo => !todo.done).length
  }
  clearDoneTodo(){
    this.setState(prevState => ({ todos: prevState.todos.filter(item => !item.done) }))
  }

  render() {
    const {
      todos, // list数据
      newTodo, // 创建新todo
    } = this.state
    return (
      <div>
        <section className="todoapp">
          {/* This section should be hidden by default and shown when there are todos */}
          <TodoHeader
            newTodo={newTodo} 
            change={this.changeNewTodo.bind(this)}
            addTodo={this.addTodo.bind(this)} />
          <TodoContext.Provider value={{ 
            delTodo: this.delTodo,
            changeDone: this.changeDone,
            changeTodo: this.changeTodo
          }}>
            <TodoList list={todos}
              toggle={this.toggle()}
              changeToggle={this.changeToggle.bind(this)} />
          </TodoContext.Provider>
          <TodoFooter
            todoCount={this.todoCount()}
            showClearCompleted={this.showClearCompleted()}
            clearDoneTodo={this.clearDoneTodo.bind(this)} />
        </section>
      </div>
    )
  }
}

export default TodoApp
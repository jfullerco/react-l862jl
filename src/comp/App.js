import React from 'react'

import ToDo from './ToDo'
import todosData from './todosData'
import '../style.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData

    }

  }
  render() {
    const todoItems = this.state.todos.map(item=> <ToDo key={item.id} item={item} />)

  return(
    <div className="todo-list">
      
      {todoItems}

    </div>

    )
  }
}

export default App
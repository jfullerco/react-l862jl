import React from 'react'

import ToDo from './ToDo'
import todosData from './todosData'
import '../style.css'

function App() {

  const todoItems = todosData.map(item => <ToDo item={item} />)

  return(
    <div className="todo-list">
      {todoItems}
      
    </div>

  )

}

export default App
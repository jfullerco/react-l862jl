import React from 'react'

import ToDo from './ToDo'
import '../style.css'

function App() {
  return(
    <div className="ToDoList">
      <ToDo
      todolist = {{listitem: "Item1"}}
      
      />

      
      <ToDo
      todolist = {{listitem: "Item2"}}
      
      />
      
    </div>

  )

}

export default App
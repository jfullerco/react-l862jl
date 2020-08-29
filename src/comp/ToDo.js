import React from 'react'

import '../style.css'


function ToDo(props) {
  return(
    <div className="ToDoItem">
      <p><input type="checkbox" />
        {props.todolist.listitem}
      </p>
    
      
    </div>

  )

}

export default ToDo
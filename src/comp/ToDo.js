import React from 'react'

import '../style.css'


function ToDo(props) {
  return(
    <div className="todo-item">
      <p><input type="checkbox"
      checked={props.item.completed} 
      onChange={() => props.handleChange(props.item.id)}
      />
        {props.item.itemToDo}
      </p>
    
      
    </div>

  )

}

export default ToDo
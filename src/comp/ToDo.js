import React from 'react'

import '../style.css'


function ToDo(props) {
  const completedStyle = {
    textDecoration: "line-through",
    color: "grey"
  }
  return(
    <div className="todo-item">
      <p style = {props.item.completed ? completedStyle: null}>
      
      <input type="checkbox"
      checked={props.item.completed} 
      onChange={() => props.handleChange(props.item.id)}
      />
        {props.item.itemToDo}
      </p>
    
      
    </div>

  )

}

export default ToDo
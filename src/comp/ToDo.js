import React from 'react'

import '../style.css'


function ToDo(props) {
  return(
    <div className="todo-item">
      <p><input type="checkbox" />
        {props.item.itemToDo}
      </p>
    
      
    </div>

  )

}

export default ToDo
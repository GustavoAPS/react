import React, { useState } from 'react'


export default function CardForm(props) {

  const {todos, setTodos} = props
  const [newTaskText, setNewTaskText] = useState("");

  function AddNewItem(){
    event.preventDefault();
    if (newTaskText === "") return;
    setTodos([...todos, newTaskText])
    setNewTaskText("")
  }

  return (
    <div>
        <form onSubmit={AddNewItem}>
          <input 
            type="text" 
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)} 
          />
          <button type='submit' >+</button>
        </form>
    </div>
  )

}

import { useState } from 'react'
import React from 'react'
import Card from './Card'
import CardForm from './CardForm'

export default function TodoList() {

  const [todos, setTodos] = useState([])

  function DeleteItem (taskIndex) {
    console.log(typeof todos)
    let newTasks = todos.filter((_, index) => index != taskIndex);
    setTodos(newTasks)
  }

  return (
    <div>
        <h2>Todo List</h2>
        <CardForm todos={todos} setTodos={setTodos} />
        <div>
            {todos.map((taskText,index) => (
              <Card key={index} taskText={taskText} taskId={index} DeleteItem = {DeleteItem}/>
            ))}
        </div>
    </div>
  )
}

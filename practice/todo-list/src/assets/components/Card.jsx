import React from 'react'


export default function Card(props) {

  const {taskText, taskId, DeleteItem} = props

  return (
    <div>
      <p>{taskText}</p>
      <button onClick={() => DeleteItem(taskId)} ></button>
    </div>    
  )

}

import React from 'react'

export default function CalculatorDisplay(props) {

  const { displayText } = props

  return (
    <div className='display-div'>
      <div className='display'>
        <p>{displayText}</p>
      </div>
    </div>
  )
}

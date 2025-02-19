import React from 'react'

export default function CalculatorDisplay(props) {

  const { displayText, calculatorOn } = props

  let displayContent
  calculatorOn ? (displayContent = displayText) : (displayContent = "@")

  return (
    <div className='display-div'>
      <div className='display'>
        <p className={calculatorOn ? "display-text-on" : "display-text-off"}>
          {displayContent}
        </p>
      </div>
    </div>
  )
}

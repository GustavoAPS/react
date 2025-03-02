import React from 'react'

export default function CalculatorDisplay(props) {

  const { displayText, calculatorOn } = props

  //console.log(calculatorOn)

  let displayContent
  calculatorOn ? (displayContent = displayText) : (displayContent = "000.000.000.000")

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

import React from 'react'

export default function CalculatorButtons(props) {

  const { handleNumberClick, handleEqualsButton,handlePowerButton } = props

  return (
    <div className='buttons-div'>
        <div className='buttons-container'>          
          <div className='left-side-buttons'>
              <button onClick={() => {handlePowerButton()}}>ON/CE</button>
              <button>MRC</button>
              <button>M-</button>
              <button>OFF</button>
              <button>√</button>
              <button>%</button>
              <button onClick={() => {handleNumberClick('7')}}>7</button>
              <button onClick={() => {handleNumberClick('8')}}>8</button>
              <button onClick={() => {handleNumberClick('9')}}>9</button>
              <button onClick={() => {handleNumberClick('4')}}>4</button>
              <button onClick={() => {handleNumberClick('5')}}>5</button>
              <button onClick={() => {handleNumberClick('6')}}>6</button>
              <button onClick={() => {handleNumberClick('1')}}>1</button>
              <button onClick={() => {handleNumberClick('2')}}>2</button>
              <button onClick={() => {handleNumberClick('3')}}>3</button>
              <button onClick={() => {handleNumberClick('0')}}>0</button>
              <button>.</button>
              <button onClick={() => {handleEqualsButton()}}>=</button>
          </div>
          <div className='right-side-buttons'>
              <button>M+</button>
              <button onClick={() => {handleNumberClick('÷')}}>÷</button>
              <button onClick={() => {handleNumberClick('x')}}>x</button>
              <button onClick={() => {handleNumberClick('-')}}>-</button>
              <button onClick={() => {handleNumberClick('+')}}>+</button>
          </div>
        </div>
    </div>
  )
}

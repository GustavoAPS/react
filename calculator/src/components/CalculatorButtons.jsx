import React from 'react'

export default function CalculatorButtons(props) {

  const { handleNumberClick } = props

  return (
    <div className='buttons-div'>
        <div className='buttons-container'>          
          <div className='left-side-buttons'>
              <button>ON/CE</button>
              <button>MRC</button>
              <button>M-</button>
              <button>OFF</button>
              <button>√</button>
              <button>%</button>
              <button>7</button>
              <button>8</button>
              <button onClick={() => {handleNumberClick('9')}}>9</button>
              <button>4</button>
              <button>5</button>
              <button>6</button>
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>0</button>
              <button>.</button>
              <button>=</button>
          </div>
          <div className='right-side-buttons'>
              <button>M+</button>
              <button>÷</button>
              <button>x</button>
              <button>-</button>
              <button>+</button>
          </div>
        </div>
    </div>
  )
}

import { useState } from 'react';
import CalculatorButtons from './components/CalculatorButtons'
import CalculatorDisplay from './components/CalculatorDisplay'
import TopDecoration from './components/TopDecoration'
import { validExpression, splitExpression, convertValues, processExpression } from './utils';

function App() {

  const [calculatorOn, setCalculatorOn] = useState(true);
  const [displayText, setDisplayText] = useState('0');


  function handleNumberClick(buttonPressed) {

    // console.log(buttonPressed)
    let newDisplayText

    // Make sure if the text is only 0 replace it for the button text, otherwise concatenate
    (displayText == '0') ? (newDisplayText = buttonPressed) : (newDisplayText = displayText + buttonPressed);

    setDisplayText(newDisplayText)
  
  }


  function handlePowerButton(){
    setDisplayText("0") // Every time the calculator is turn on or off we set text to 0
    setCalculatorOn(true)
  }


  function handleEqualsButton(){

    //Split the expression(string) in individual parts(strings)
    let expressionParts = splitExpression(displayText)

    //Convert the individual parts(string) to numbers where necessary
    let convertedExpression = convertValues(expressionParts)
    
    if (validExpression(convertedExpression)){
      let processResult = processExpression(convertedExpression)
      console.log(processResult)
      setDisplayText(processResult)
    }

  }

  
  return (
    <>
      <header>
      </header>
      <div className="calculator-container">
        <TopDecoration />
        <CalculatorDisplay displayText={displayText} calculatorOn={calculatorOn}/>
        <CalculatorButtons  handleNumberClick={handleNumberClick} handleEqualsButton={handleEqualsButton} handlePowerButton={handlePowerButton} calculatorOn={setCalculatorOn} />     
      </div>
    </>
  )
}

export default App

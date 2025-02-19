import { useState } from 'react';
import CalculatorButtons from './components/CalculatorButtons'
import CalculatorDisplay from './components/CalculatorDisplay'
import TopDecoration from './components/TopDecoration'

function App() {

  const [calculatorOn, setCalculatorOn] = useState(true);
  const [displayText, setDisplayText] = useState('0');

  function handleNumberClick(buttonPressed) {
    console.log(buttonPressed)
    setDisplayText(buttonPressed)
  }
  
  return (
    <>
      <header>
      </header>
      <div className="calculator-container">
        <TopDecoration />
        <CalculatorDisplay displayText={displayText} />
        <CalculatorButtons  handleNumberClick={handleNumberClick} calculatorOn={setCalculatorOn} />     
      </div>
    </>
  )
}

export default App

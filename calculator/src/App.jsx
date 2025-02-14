import { useState } from 'react';
import CalculatorButtons from './components/CalculatorButtons'
import CalculatorDisplay from './components/CalculatorDisplay'
import TopDecoration from './components/TopDecoration'

function App() {

  const [displayText, setDisplayText] = useState('');

  function handleNumberClick() {
    setDisplayCount('9');
  }
  
  return (
    <>
      <header>
      </header>
      <div className="calculator-container">
        <TopDecoration />
        <CalculatorDisplay displayText={displayText} />
        <CalculatorButtons  handleNumberClick={handleNumberClick} />     
      </div>
    </>
  )
}

export default App

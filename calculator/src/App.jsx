import CalculatorButtons from './components/CalculatorButtons'
import CalculatorDisplay from './components/CalculatorDisplay'
import TopDecoration from './components/TopDecoration'

function App() {
  
  return (
    <>
      <header>
      </header>
      <div className="calculator-container">
        <TopDecoration />
        <CalculatorDisplay />
        <CalculatorButtons />     
      </div>
    </>
  )
}

export default App

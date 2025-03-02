import { useState } from 'react';
import CalculatorButtons from './components/CalculatorButtons'
import CalculatorDisplay from './components/CalculatorDisplay'
import TopDecoration from './components/TopDecoration'

function App() {

  const [calculatorOn, setCalculatorOn] = useState(true);
  const [displayText, setDisplayText] = useState('0');


  function isNumeric(str) {
    return !isNaN(parseFloat(str)) && isFinite(str);
  }


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


  function splitExpression(expression) {
    return expression.match(/\d+(\.\d+)?|[()+\-x÷]/g);
  }


  function convertValues(expressionParts){

    console.log("**converting str array values to numbers**")

    let convertedExpression = []

    expressionParts.forEach((element, index) => {
      isNumeric(element) ? convertedExpression.push(parseInt(element)) : convertedExpression.push(element)
    });

    return convertedExpression
  }


  function validExpression(expression){
    // get the expression as an array with the elements already converted
    return true;
  }

  

  function processExpression(expressionParts){
    // Process the expression recursivelly

    // The order of operations follows PEMDAS/BODMAS rules:

    // Parentheses(not the case)
    // Exponents(not the case)
    // MD Multiplication and Division (from left to right)
    // AS Addition and Subtraction (from left to right)

    console.log(`Expression to process: ${expressionParts}`);

    
    const multiplicationCheck = (element) => (element == 'x');
    const divisionCheck = (element) => (element == '÷');
    const additionCheck = (element) => (element == '+');
    const subtractionCheck = (element) => (element == '-');

    let multiplicationIndex = expressionParts.findIndex(multiplicationCheck);
    let divisionIndex = expressionParts.findIndex(divisionCheck);
    let additionIndex = expressionParts.findIndex(additionCheck);
    let subtractionIndex = expressionParts.findIndex(subtractionCheck);

    //-----------------------------------------MULTIPLICATION-----------------------------------------
    if (multiplicationIndex != -1){
      console.log('multiplication found')

      let multiplicationResult = expressionParts[multiplicationIndex - 1] * expressionParts[multiplicationIndex + 1]
      
      console.log(`Multiplication result: ${multiplicationResult}`)
      console.log(`array: ${expressionParts}`)
      
      if(expressionParts.length <= 3){
        setDisplayText(String(multiplicationResult))
      }else{
        let firstPart = expressionParts.slice(0,multiplicationIndex - 1)
        let secondPart = expressionParts.slice(multiplicationIndex + 2)

        console.log(`First part ${firstPart}`)
        console.log(`Second part ${secondPart}`)

        let newArray = firstPart.concat(multiplicationResult).concat(secondPart)

        console.log(`Array after multiplication resolution: ${newArray}`)

        processExpression(newArray)
      }
    }
    
    //-----------------------------------------DIVISION-----------------------------------------
    if (divisionIndex != -1){
      console.log('Division found')

      let divisionResult = expressionParts[divisionIndex - 1] / expressionParts[divisionIndex + 1]
      
      console.log(`Division result: ${divisionResult}`)
      console.log(`array: ${expressionParts}`)
      
      if(expressionParts.length <= 3){
        setDisplayText(String(divisionResult))
      }else{
        let firstPart = expressionParts.slice(0,divisionIndex - 1)
        let secondPart = expressionParts.slice(divisionIndex + 2)

        console.log(`First part ${firstPart}`)
        console.log(`Second part ${secondPart}`)

        let newArray = firstPart.concat(divisionResult).concat(secondPart)

        console.log(`Array after multiplication resolution: ${newArray}`)

        processExpression(newArray)
      }
    }
    
    //-----------------------------------------ADDITION-----------------------------------------
    if (additionIndex != -1){
      console.log('addition found')

      let additionResult = expressionParts[additionIndex - 1] + expressionParts[additionIndex + 1]
      
      console.log(`ADD RESULT ${additionResult}`)
      console.log(`array: ${expressionParts}`)
      
      if(expressionParts.length <= 3){
        setDisplayText(String(additionResult))
      }else{
        let firstPart = expressionParts.slice(0,additionIndex - 1)
        let secondPart = expressionParts.slice(additionIndex + 2)

        console.log(`First part ${firstPart}`)
        console.log(`Second part ${secondPart}`)

        let newArray = firstPart.concat(additionResult).concat(secondPart)

        console.log(`Array after addition resolution: ${newArray}`)

        processExpression(newArray)
      }
    }
    //-----------------------------------------Subtraction-----------------------------------------
    if (subtractionIndex != -1){
      console.log('subtraction found')

      let subtractionResult = expressionParts[subtractionIndex - 1] - expressionParts[subtractionIndex + 1]
      
      console.log(`Subtraction RESULT ${subtractionResult}`)
      console.log(`array: ${expressionParts}`)
      
      if(expressionParts.length <= 3){
        setDisplayText(String(subtractionResult))
      }else{
        let firstPart = expressionParts.slice(0,subtractionIndex - 1)
        let secondPart = expressionParts.slice(subtractionIndex + 2)

        console.log(`First part ${firstPart}`)
        console.log(`Second part ${secondPart}`)

        let newArray = firstPart.concat(subtractionResult).concat(secondPart)

        console.log(`Array after subtraction resolution: ${newArray}`)

        processExpression(newArray)
      }
    }
  
    return expressionParts[0]
  }


  function handleEqualsButton(){

    let expressionParts = splitExpression(displayText)
    let convertedExpression = convertValues(expressionParts)
    
    console.log(`Original string      : ${displayText}`)
    console.log(`Split result         : ${expressionParts}`)    
    
    if (validExpression(convertedExpression)){
      processExpression(convertedExpression)
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

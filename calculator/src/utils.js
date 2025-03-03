export function validExpression(expression){
    // get the expression as an array with the elements already converted
    return true;
}


function isNumeric(str) {
    return !isNaN(parseFloat(str)) && isFinite(str);
}


export function splitExpression(expression) {
    return expression.match(/\d+(\.\d+)?|[()+\-x÷]/g);
}


export function convertValues(expressionParts){

    console.log("converting str array values to numbers . . .")

    let convertedExpression = []

    expressionParts.forEach((element, index) => {
      isNumeric(element) ? convertedExpression.push(parseInt(element)) : convertedExpression.push(element)
    });

    return convertedExpression
}


export function processExpression(expressionParts){
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
    
    let operationResult
    let operatorIndex

    console.log(`HERE`);
    
    //-----------------------------------------Multiplication-----------------------------------------
    if (multiplicationIndex != -1){
      operationResult = expressionParts[multiplicationIndex - 1] * expressionParts[multiplicationIndex + 1]
      operatorIndex = multiplicationIndex
    }  
    
    //------------------------------------------Division-----------------------------------------
    if (divisionIndex != -1){
        operationResult = expressionParts[divisionIndex - 1] / expressionParts[divisionIndex + 1]
        operatorIndex = divisionIndex
    }  
    
    //------------------------------------------Addition-----------------------------------------
    if (additionIndex != -1){
        operationResult = expressionParts[additionIndex - 1] + expressionParts[additionIndex + 1]
        operatorIndex = additionIndex
    }  

    //------------------------------------------Subtraction-----------------------------------------
    if (subtractionIndex != -1){
        operationResult = expressionParts[subtractionIndex - 1] - expressionParts[subtractionIndex + 1]
        operatorIndex = subtractionIndex
    }  

    console.log(`Operation result: ${operationResult} expression len ${expressionParts.length}`);

    if(expressionParts.length <= 3){
        console.log("returning")
        return(String(operationResult))
    }else{
        let firstPart = expressionParts.slice(0,operatorIndex - 1)
        let secondPart = expressionParts.slice(operatorIndex + 2)

        let newArray = firstPart.concat(operationResult).concat(secondPart)

        return processExpression(newArray)
    }
}
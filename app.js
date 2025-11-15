const calculatorDisplay = document.querySelector('#calculator-display');
// const oneBtn = document.querySelector('#one-btn');
// const twoBtn = document.querySelector('#two-btn');
// const threeBtn = document.querySelector('#three-btn');
// const fourBtn = document.querySelector('#four-btn');
// const fiveBtn = document.querySelector('#five-btn');
// const sixBtn = document.querySelector('#six-btn');
// const sevenBtn = document.querySelector('#seven-btn');
// const eightBtn = document.querySelector('#eight-btn');
// const nineBtn = document.querySelector('#nine-btn');
// const zeroBtn = document.querySelector('#zero-btn')
const allDigitsBtns = document.querySelectorAll('.digit-btn');
const operatorBtns = document.querySelectorAll('.operator-btns');
const decimalBtn = document.querySelector('#decimal-btn');
// const minusBtn = document.querySelector('#minus-btn');
// const divideBtn = document.querySelector('#divide-btn');
// const multiplyBtn = document.querySelector('#multiply-btn');
// const plusBtn = document.querySelector('#plus-btn');
const equalBtn = document.querySelector('#equal-btn');
const delBtn = document.querySelector('#del-btn');
const resetBtn = document.querySelector('#reset-btn');

let operand1;
let operand2;
let operator;
let currentValue;
let currentOperator;

function add (num1, num2) {
    return num1 + num2;
}

function substract (num1, num2) {
    return num1 - num2;
}

function multiply (num1, num2) {
    return num1 * num2;
}

function divide (num1, num2) {
    return num1 / num2;
}

//this function takes an operator and two numbers and then calls one of the above functions on the numbers
function compute (operator, operand1, operand2) {
    if (operator === "+") {
        return add (operand1, operand2);
    } else if(operator === "-") {
        return substract (operand1, operand2);
    } else if (operator === "*") {
        return multiply (operand1, operand2);
    } else if (operator === "/") {
        if (operand2 === 0) {
            return "undefined";
        }
        return divide (operand1, operand2);
    } else return null;

}

document.addEventListener('keydown', event => {
    if(!isNaN(event.key)) {
        if (currentOperator !== undefined){
            operator = currentOperator;
            currentOperator = undefined;
            calculatorDisplay.value = '';
            currentValue = undefined;
        }
        
        calculatorDisplay.value += event.key;
        currentValue = Number(calculatorDisplay.value);
    } else if (calculatorDisplay.value === '') {
        return
    } else if (event.key === "Backspace"){
        let newDisplay = (calculatorDisplay.value).slice(0, -1);
        calculatorDisplay.value = newDisplay;
        currentValue = removeLastDigitString(currentValue);
    }
})

// this function populate the display when you click the digit buttons
allDigitsBtns.forEach( button => {
    button.addEventListener('click', () => {
        // check if an operand and a operator is already inputed
        if (currentOperator !== undefined){
            operator = currentOperator;
            currentOperator = undefined;
            calculatorDisplay.value = '';
            currentValue = undefined;
        }
        
        // This displays the content of the number button being clicked
        const clickedButton = event.target;
        calculatorDisplay.value += clickedButton.textContent;
        currentValue = Number(calculatorDisplay.value);
    })
})

operatorBtns.forEach( operatorBtn => {
    operatorBtn.addEventListener('click', () => {
        // the operator buttons should not do anything if there's nothing on the screen
        if (calculatorDisplay.value === '') {
            return;
        } else {
            // change the number on the screen into a number and assign it to operand1
            operand1 = currentValue;
            // store the last operator that was inputed in the current operator
            currentOperator = event.target.dataset.operator;
            }
    })
})

decimalBtn.addEventListener('click', () => {
    if (!Number.isInteger(currentValue)) {
        return;
    } else {
        calculatorDisplay.value += '.';
    }
})

equalBtn.addEventListener('click', () => {
    // This ensures the calculator does not run when the screen is empty
    if(calculatorDisplay.value == '') {
        return;
    //This ensures the calculator does not run when the operands have not been imputed
    } else if (operand1 === undefined) {
        return;
    //This ensures the calculator does not run when the operator is undefined 
    } else if(operator === undefined) {
        return;
    } else {
        operand2 = currentValue;
        let result = compute(operator, operand1, operand2);
        calculatorDisplay.value = result;
        operand1 = result;
        operand2 = undefined;
    }
})

delBtn.addEventListener('click', () => {
    // The function should not run if there's nothing to display
    if (calculatorDisplay.value === '') {
        return
    } else {
        let newDisplay = (calculatorDisplay.value).slice(0, -1);
        calculatorDisplay.value = newDisplay;
        currentValue = removeLastDigitString(currentValue);
    }

})

function removeLastDigitString(number) {
  const numString = number.toString(); // Convert to string
  const newString = numString.slice(0, -1); // Remove the last character
  return Number(newString); // Convert back to a number
}

resetBtn.addEventListener('click', () => {
    operand1 = undefined;
    operand2 = undefined;
    operator = undefined;
    currentValue = undefined;
    currentOperator = undefined;
    calculatorDisplay.value = "";
})
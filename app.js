const calculatorDisplay = document.querySelector('#calculator-display');
const oneBtn = document.querySelector('#one-btn');
const twoBtn = document.querySelector('#two-btn');
const threeBtn = document.querySelector('#three-btn');
const fourBtn = document.querySelector('#four-btn');
const fiveBtn = document.querySelector('#five-btn');
const sixBtn = document.querySelector('#six-btn');
const sevenBtn = document.querySelector('#seven-btn');
const eightBtn = document.querySelector('#eight-btn');
const nineBtn = document.querySelector('#nine-btn');
const allDigitsBtns = document.querySelectorAll('.digit-btn');
const decimalBtn = document.querySelector('#decimal-btn');
const minusBtn = document.querySelector('#minus-btn');
const divideBtn = document.querySelector('#divide-btn');
const multiplyBtn = document.querySelector('#multiply-btn');
const plusBtn = document.querySelector('#plus-btn');
const operatorBtn = document.querySelector('#operator-btn');
const delBtn = document.querySelector('#delBtn');
const resetBtn = document.querySelector('#operator-btn');

let operand1
let operator
let operand2

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

function operate (operator, operand1, operand2) {
    if (operator === "+") {
        add (operand1, operand2);
    } else if(operator === "-") {
        substract (operand1, operand2);
    } else if (operator === "*") {
        multiply (operand1, operand2);
    } else if (operator === "/") {
        divide (operand1, operand2);
    } else return null;
}

allDigitsBtns.forEach( button => {
    button.addEventListener('click', () => {
        const clickedButton = event.target;
        calculatorDisplay.value += clickedButton.textContent;
        const currentValue = calculatorDisplay.value;
        console.log(currentValue);
    })
})
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
// const decimalBtn = document.querySelector('#decimal-btn');
// const minusBtn = document.querySelector('#minus-btn');
// const divideBtn = document.querySelector('#divide-btn');
// const multiplyBtn = document.querySelector('#multiply-btn');
// const plusBtn = document.querySelector('#plus-btn');
const equalBtn = document.querySelector('#equal-btn');
const delBtn = document.querySelector('#delBtn');
const resetBtn = document.querySelector('#reset-btn');

let operand1
let operand2
let operator

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

// this function populate the display when you click the digit buttons
allDigitsBtns.forEach( button => {
    button.addEventListener('click', () => {
        const clickedButton = event.target;
        calculatorDisplay.value += clickedButton.textContent;
    })
})

operatorBtns.forEach( operatorBtn => {
    operatorBtn.addEventListener('click', () => {
        // the operator buttons should not do anything if there's nothing on the screen
        if (calculatorDisplay.value == '') {
            return
        } else {
            operand1 = calculatorDisplay.value;
            calculatorDisplay.value = '';
            operator = event.target.data.operator;
            console.log(operator);
            }
    })
})


equalBtn.addEventListener('click', () => {
    operand2 = calculatorDisplay.value;

})
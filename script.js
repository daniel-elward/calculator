let dispValue;
let secondDispValue;
let dispValueArray= [];
let numOne;
let numTwo;
let result;
let mathOperator;

// DOM selection
let keypadDOM = document.querySelector('.keyPadNumbers');
let operatorDOM = document.querySelector('.keyPadOperators');
let displayDOM = document.querySelector('.display');
let secondDisplayDOM = document.querySelector('.secondaryDisplay');
let equalBtnDOM = document.getElementById('equal');
let clearBtnDOM = document.getElementById('clearBtn')

/*
store key presses in dispValue, when operator is selected store it in mathOperator and take current state of dispValue, store that number in numOne, update secondDispValue and clear dispValue. user enters the next numbers and presses = take the new value of dispValue and store it in numTwo. += to secodDisplay and make the calculation

//testing logs
console.log(`dispValue = ${dispValue}`);
console.log(`numOne = ${numOne}`);
console.log(`numTwo = ${numTwo}`);
console.log(`tempNum = ${tempNum}`);
console.log(dispValueArray)

*/

//populate displayValue with users input
keypadDOM.addEventListener('click', (event => {
    
    //updates with each selection but removes the initial 'undefined'
    if(!dispValue) { dispValue = event.target.value;} 
    else { dispValue += event.target.value;}
    
    console.log(`dispValue = ${dispValue}`);
    displayDOM.innerHTML = `${dispValue}`;
}));

//math operator
operatorDOM.addEventListener('click', (e) => {

    //get the first set of numbers for the calculation and the math operator
    if (dispValue != null) {
        numOne = dispValue;
        secondDispValue = dispValue;
        dispValue = null;
        secondDisplayDOM.innerHTML += secondDispValue;
    }

    mathOperator = e.target.value;
    secondDisplayDOM.innerHTML += e.target.value;
});

//get the result of the calculation
equalBtnDOM.addEventListener('click', () => {

        numTwo = dispValue;
        secondDispValue += mathOperator;
        secondDispValue += dispValue;
        dispValue = null;
        secondDisplayDOM.innerHTML = secondDispValue;

    console.log(`result = ${result}`);

    console.log(`dispValue = ${dispValue}`);
    console.log(`secondDispValue = ${secondDispValue}`);
    console.log(`numOne = ${numOne}`);
    console.log(`numTwo = ${numTwo}`);
    console.log(`mathOperator = ${mathOperator}`);
});








//clear button
clearBtnDOM.addEventListener('click', () => clear());

function clear(){
    dispValue = null;
    displayDOM.innerHTML = "0000"
}

function add (valueOne, valueTwo) {
    let sum = valueOne + valueTwo

    return sum
}

function subtract (valueOne, valueTwo) {
    let sum = valueOne - valueTwo

    return sum
}

function multiply (valueOne, valueTwo) {
    let sum = valueOne * valueTwo

    return sum
}

function divide (valueOne, valueTwo) {
    let sum = valueOne / valueTwo

    return sum
}

function operate (operator, valueOne, valueTwo) {

    if (operator === "+") { 

        let sum = add(valueOne, valueTwo);
        return sum

    } else if(operator === "-") { 

        let sum = subtract(valueOne, valueTwo);
        return sum

    } else if(operator === "*") { 

        let sum = multiply(valueOne, valueTwo);
        return sum

    } else if(operator === "/") { 

       let sum = divide(valueOne, valueTwo);
       return sum
    } 
};
let dispValue = null;
let secondDispValue = null;
let numOne = null;
let numTwo = null;
let result = null;
let mathOperator = null;

// DOM selection
let keypadDOM = document.querySelector('.keyPadNumbers');
let operatorDOM = document.querySelector('.keyPadOperators');
let displayDOM = document.querySelector('.display');
let secondDisplayDOM = document.querySelector('.secondaryDisplay');
let equalBtnDOM = document.getElementById('equal');
let clearBtnDOM = document.getElementById('clearBtn')
let testingLogDOM = document.getElementById('logs')

//populate displayValue with users input
keypadDOM.addEventListener('click', (event => {
    
    //updates with each selection but removes the initial 'undefined'
    if(!dispValue) { dispValue = event.target.value;} 
    else { dispValue += event.target.value;}
    
    displayDOM.innerHTML = `${dispValue}`;
}));

//math operator
operatorDOM.addEventListener('click', (event) => {
    //if user enters a second operator selection, get the sum of the current selections then get the first set of numbers for the calculation and the math operator
    if (numOne != null && mathOperator != null) {

        numTwo = dispValue;
        operate(mathOperator, numOne, numTwo);
        mathOperator = null;
        mathOperator = event.target.value;
        secondDispValue = result;
        secondDisplayDOM.innerHTML = secondDispValue;
        dispValue = null;
        displayDOM.innerHTML = dispValue;
        numOne = result;
        
    } else if (dispValue != null) {
        numOne = dispValue;
        secondDispValue = dispValue;
        dispValue = null;
        secondDisplayDOM.innerHTML = secondDispValue;
    }

    mathOperator = event.target.value;
    secondDisplayDOM.innerHTML += event.target.value;
});

//get the result of the calculation
equalBtnDOM.addEventListener('click', () => {

    //prevents equal sign running when no numbers are stored
    if (numOne === null || mathOperator === null){
        secondDisplayDOM.innerHTML = "Hey! ... Maybe try ";
        displayDOM.innerHTML = "entering some numbers?";
    } else {
        numTwo = dispValue;
        secondDispValue += mathOperator;
        secondDispValue += dispValue;
        dispValue = null;
        secondDisplayDOM.innerHTML = secondDispValue;
    
        operate(mathOperator, numOne, numTwo);
        //update numOne for the next calculation
        numOne = result;
    }
});


//clear button
clearBtnDOM.addEventListener('click', clear);

function clear(){
    dispValue = null;
    secondDispValue = null;
    result = null;
    numOne = null;
    numTwo = null;
    mathOperator = null;
    secondDisplayDOM.innerHTML = "0000";
    displayDOM.innerHTML = "0000";
}

//logs for testing
//testingLogDOM.addEventListener('click', testingLogs);

function testingLogs() {
    console.log(`numOne = ${numOne}`)
    console.log(`numTwo = ${numTwo}`)
    console.log(`mathOperator = ${mathOperator}`)
    console.log(`result = ${result}`)
    console.log(`-------------`)
};

function add (numOne, numTwo) {
    result = Number(numOne) + Number(numTwo)
    result = Math.round(result * 100) / 100
    return result
}

function subtract (numOne, numTwo) {
    result = Number(numOne) - Number(numTwo)
    result = Math.round(result * 100) / 100
    return result
}

function multiply (numOne, numTwo) {
    result = Number(numOne) * Number(numTwo)
    result = Math.round(result * 100) / 100
    return result
}

function divide (numOne, numTwo) {
    result = Number(numOne) / Number(numTwo)
    result = Math.round(result * 100) / 100
    return result
}

function operate (mathOperator, numOne, numTwo) {

        if (mathOperator === '+') {

            add(numOne, numTwo);
            displayDOM.innerHTML = result;

        } else if (mathOperator === '-') {

            subtract(numOne, numTwo);
            displayDOM.innerHTML = result;

        } else if (mathOperator === '*') {

            multiply(numOne, numTwo);
            displayDOM.innerHTML = result;

        } else if (mathOperator === '/') {
            
            if (numOne <= 0 || numTwo <= 0) {
                clear();
                secondDispValue = "What is this....";
                secondDisplayDOM.innerHTML = "What is this....";
                dispValue = "No Bro, you can't do that!";
                displayDOM.innerHTML = "No Bro, you can't do that!";
            } else {
                divide(numOne, numTwo);
                displayDOM.innerHTML = result;
                secondDisplayDOM.innerHTML = secondDispValue;
            }

        };
};
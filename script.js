let dispValue;
let secondDispValue;
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
    if (numOne >= 0 && mathOperator != null) {

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

    if (numOne === null || numTwo === null){
        secondDisplayDOM.innerHTML = "Hey! ....";
        displayDOM.innerHTML = "Maybe try entering some numbers?";
    };

    numTwo = dispValue;
    secondDispValue += mathOperator;
    secondDispValue += dispValue;
    dispValue = null;
    secondDisplayDOM.innerHTML = secondDispValue;

    operate(mathOperator, numOne, numTwo);

    //update numOne for the next calculation
    numOne = result;
    


});


//clear button
clearBtnDOM.addEventListener('click', clear);

function clear(){
    dispValue = null;
    secondDispValue = null;
    result = null;
    numOne = null;
    numTwo = null;
    secondDisplayDOM.innerHTML = "0000";
    displayDOM.innerHTML = "0000";
}

function add (numOne, numTwo) {
    result = Number(numOne) + Number(numTwo)
    //result = result.toFixed(2);
    return result
}

function subtract (numOne, numTwo) {
    result = Number(numOne) - Number(numTwo)
    //result = result.toFixed(2);
    return result
}

function multiply (numOne, numTwo) {
    result = Number(numOne) * Number(numTwo)
    //result = result.toFixed(2);
    return result
}

function divide (numOne, numTwo) {
    result = Number(numOne) / Number(numTwo)
    //result = result.toFixed(2);
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
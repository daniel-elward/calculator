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

/* TESTING 
let test = divide(2);
console.log(test);
*/

let valueOne;
let valueTwo;
let operator;

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

/* TESTING
let test = operate("/", 4, 2);
console.log(test);
*/
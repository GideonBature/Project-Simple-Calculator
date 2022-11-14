//get the buttons
const display = document.querySelector('.screen')
const numbers = document.querySelectorAll('.btn-number');
const operators = document.querySelectorAll('.btn-operator');
const clear = document.querySelector('.btn-clear');
const power = document.querySelector('.btn-power');
const percentage = document.querySelector('.btn-percentage');
const del = document.querySelector('.btn-delete');
const point = document.querySelector('.btn-point');
const equal = document.querySelector('.btn-equals');

//define values
let displayValue = "";
let num1 = "";
let num2 = "";
let operator = "";

//add buttons event listeners
numbers.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonValue = e.target.dataset.set;
        if(num1.length < 30) {
            num1 += buttonValue;
            display.textContent = num1;
        }

    })
})

operators.forEach(button => {
    button.addEventListener('click', (e) => {
        const operatorValue = e.target.dataset.set;
        operator = operatorValue;
        num2 = num1;
        num1 = "";
        display.textContent = num2;

    })
})

clear.addEventListener('click', () => {
    num1 = '';
    num2 = '';
    operator = '';
    display.textContent = '';
})

equal.addEventListener('click', () => {
    num1 = Number(num1);
    num2 = Number(num2);

    const add = function(n1, n2) {
        return (n1+n2);
    }
    const subtract = function(n1, n2) {
        return n2 - n1;
    }
    const multiply = function(n1, n2) {
        return n1 * n2;
    }
    const divide = function(n1, n2) {
        if(n1 == 0) {
            return "Infinity"
        } else {
            return n2/n1;
        }
    }

    if(operator == "+") {
        let result = add(num1, num2);
        display.textContent = result;
        return result;
        
    } else if (operator == "-") {
        let result = subtract(num1, num2);
        display.textContent = result;
        return result;
    } else if (operator == "*") {
        let result = multiply(num1, num2);
        display.textContent = result;
        return result;
    } else if (operator == "/") {
        let result = divide(num1, num2);
        display.textContent = result;
        return result;
    }
})
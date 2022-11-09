//capture all the necessary buttons
const btnNumber = document.querySelectorAll(".btn-number");
const btnOperator = document.querySelectorAll(".btn-operator");
const point = document.querySelector(".btn-point");
const clear = document.querySelector(".btn-clear");
const del = document.querySelector(".btn-delete");
const equals = document.querySelector(".btn-equals");
const display = document.querySelector(".display");

//set the initial display value
let displayData = "0";

btnNumber.forEach(button => {
    button.addEventListener('click', () => {
        const btnNumberValue = button.getAttribute('data-set');
        
        displayData += btnNumberValue;

        display.textContent = displayData;
    })
})

btnOperator.forEach(button => {
    button.addEventListener('click', ()=> {
        const btnOperatorValue = button.getAttribute('data-set');

    })
})

const operate = function(num1, btnOperatorValue, num2) {

    //operator functions
    const add = function(num1, num2) {
        return num1 + num2;
    }
    const subtract = function(num1, num2) {
        return num1 - num2;
    }
    const multiply = function(num1, num2) {
        return num1 * num2;
    }
    const divide = function(num1, num2) {
        return num1 / num2;
    }

    //logic for operator functions
    if(btnOperatorValue == '+') {
        add(num1, num2);
    } else if(btnOperatorValue == '-') {
        subtract(num1, num2);
    } else if(btnOperatorValue == '*') {
        multiply(num1, num2);
    } else if (btnOperatorValue == '/') {
        divide(num1, num2);
    }
}


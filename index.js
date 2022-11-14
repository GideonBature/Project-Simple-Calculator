//get the buttons
const display = document.querySelector('.screen')
const numbers = document.querySelectorAll('.btn-number');
const operators = document.querySelectorAll('.btn-operator');
const clear = document.querySelector('.btn-clear');
const power = document.querySelector('.btn-power');
const percentage = document.querySelector('.btn-percentage');
const del = document.querySelector('.btn-delete');
const point = document.querySelector('.btn-point');
const equals = document.querySelector('btn-equals');

//define values
let displayValue = "";
let num1 = "";
let num2 = "";

//add buttons event listeners
numbers.forEach(button => {
    button.addEventListener('click', (e) => {
        console.log(e.target.dataset.set)
        const buttonValue = e.target.dataset.set;
        num1 += buttonValue;
        display.textContent = num1;
        
        

    })
})

operators.forEach(button => {
    button.addEventListener('click', (e) => {
        console.log(e.target.dataset.set)
        const operatorValue = e.target.dataset.set;
        num1 = num2;
        num2 = "";
        display.textContent = "";

    })
})

